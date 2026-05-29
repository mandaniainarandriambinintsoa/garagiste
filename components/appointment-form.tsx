"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowRight, CalendarDays, CheckCircle2, Clock, X } from "lucide-react";

type Mode = "private" | "fleet";

type FormState = {
  service: string;
  name: string;
  phone: string;
  vehicle: string;
  date: string;
  time: string;
  message: string;
  urgency: string;
};

const initialState: FormState = {
  service: "",
  name: "",
  phone: "",
  vehicle: "",
  date: "",
  time: "",
  message: "",
  urgency: "Cette semaine",
};

export function AppointmentForm() {
  const [mode, setMode] = useState<Mode>("private");
  const [form, setForm] = useState<FormState>(initialState);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [pending, setPending] = useState(false);

  const canSubmit = useMemo(() => {
    return form.service && form.name.trim().length > 1 && form.phone.trim().length > 5 && form.date;
  }, [form]);

  const update = (key: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const submit = async () => {
    setPending(true);
    setFeedback("");

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...form, mode }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Impossible d'envoyer la demande.");
      }

      setFeedback(`Demande envoyee. Reference ${data.appointmentId}. Le garage vous confirme le creneau.`);
      setForm(initialState);
      setConfirmOpen(false);
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : "Erreur inconnue.");
    } finally {
      setPending(false);
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit) {
      setFeedback("Completez le service, le nom, le telephone et la date souhaitee.");
      return;
    }
    setConfirmOpen(true);
  };

  return (
    <div className="appointment-card">
      <div className="appointment-tabs" role="tablist" aria-label="Type de demande">
        <button
          type="button"
          className={mode === "private" ? "active" : ""}
          onClick={() => setMode("private")}
        >
          Rendez-vous particulier
        </button>
        <button
          type="button"
          className={mode === "fleet" ? "active" : ""}
          onClick={() => setMode("fleet")}
        >
          Demande de devis flotte
        </button>
      </div>

      <form className="appointment-form" onSubmit={onSubmit}>
        <select value={form.service} onChange={(event) => update("service", event.target.value)} required>
          <option value="">Service souhaite</option>
          <option>Diagnostic electronique</option>
          <option>Entretien periodique</option>
          <option>Freinage & suspension</option>
          <option>Batterie & demarrage</option>
          <option>Pneumatiques</option>
          <option>Climatisation</option>
          <option>Devis flotte</option>
        </select>
        <input
          value={form.name}
          onChange={(event) => update("name", event.target.value)}
          placeholder="Nom complet"
          required
        />
        <input
          value={form.phone}
          onChange={(event) => update("phone", event.target.value)}
          placeholder="Telephone"
          required
        />
        <input
          value={form.vehicle}
          onChange={(event) => update("vehicle", event.target.value)}
          placeholder="Vehicule / immatriculation"
        />
        <label>
          <span>Date souhaitee</span>
          <input
            type="date"
            value={form.date}
            onChange={(event) => update("date", event.target.value)}
            required
          />
        </label>
        <label>
          <span>Heure souhaitee</span>
          <input type="time" value={form.time} onChange={(event) => update("time", event.target.value)} />
        </label>
        <select value={form.urgency} onChange={(event) => update("urgency", event.target.value)}>
          <option>Aujourd'hui si possible</option>
          <option>Cette semaine</option>
          <option>Entretien planifie</option>
          <option>Demande flotte</option>
        </select>
        <textarea
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          placeholder="Message / demande specifique"
        />
        <button className="form-submit" type="submit">
          Envoyer ma demande <ArrowRight size={18} aria-hidden="true" />
        </button>
      </form>

      {feedback ? <p className="form-feedback">{feedback}</p> : null}

      {confirmOpen ? (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Confirmer la demande">
          <div className="confirm-modal">
            <button className="modal-close" type="button" onClick={() => setConfirmOpen(false)} aria-label="Fermer">
              <X size={19} aria-hidden="true" />
            </button>
            <span className="modal-icon">
              <CheckCircle2 size={28} aria-hidden="true" />
            </span>
            <h3>Confirmer la demande ?</h3>
            <p>
              Le garage recevra votre demande et vous confirmera le creneau avant toute intervention.
            </p>
            <div className="modal-summary">
              <span>{form.service}</span>
              <span>{mode === "fleet" ? "Devis flotte" : "Rendez-vous particulier"}</span>
              <span>
                <CalendarDays size={15} aria-hidden="true" /> {form.date}
              </span>
              <span>
                <Clock size={15} aria-hidden="true" /> {form.time || "Heure a confirmer"}
              </span>
            </div>
            <div className="modal-actions">
              <button type="button" className="btn secondary dark" onClick={() => setConfirmOpen(false)}>
                Modifier
              </button>
              <button type="button" className="btn primary" onClick={submit} disabled={pending}>
                {pending ? "Envoi..." : "Confirmer l'envoi"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
