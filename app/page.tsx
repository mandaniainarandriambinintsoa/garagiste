import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CarFront,
  Check,
  Mail,
  MapPin,
  Phone,
  Wrench,
} from "lucide-react";
import { AppointmentForm } from "@/components/appointment-form";
import { heroBadges, services, siteConfig, trustItems, zones } from "@/data/garage";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <Link className="brand" href="#accueil" aria-label="Garage Urbain accueil">
          <span className="brand-mark">
            <CarFront size={23} aria-hidden="true" />
          </span>
          <span>
            <strong>{siteConfig.name}</strong>
            <small>{siteConfig.tagline}</small>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Navigation principale">
          <a href="#accueil">Accueil</a>
          <a href="#services">Services</a>
          <a href="#flottes">Flottes & Pro</a>
          <a href="#engagements">A propos</a>
          <a href="#zones">Zones d'intervention</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">
          Demander un devis
        </a>
      </header>

      <main>
        <section id="accueil" className="hero-section">
          <Image
            src="/images/garage/garage-hero.webp"
            alt="Garage automobile moderne a Antananarivo"
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />
          <div className="hero-overlay" />
          <div className="container hero-content">
            <div className="hero-copy">
              <p className="eyebrow">Garage premium a Antananarivo</p>
              <h1>
                Votre garage de confiance
                <span> a Antananarivo</span>
              </h1>
              <p className="hero-lead">
                Entretien, reparation et diagnostic pour particuliers, taxis, VTC et petites flottes.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="#contact">
                  Prendre rendez-vous <CalendarDays size={18} aria-hidden="true" />
                </a>
                <a className="btn secondary" href={siteConfig.whatsapp}>
                  Demander un devis <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="hero-badges" aria-label="Points forts">
              {heroBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <article key={badge.title}>
                    <span>
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <div>
                      <strong>{badge.title}</strong>
                      <small>{badge.description}</small>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="container">
            <div className="section-header split">
              <div>
                <p className="section-label">Nos services</p>
                <h2>Des prestations completes pour votre securite</h2>
              </div>
              <p>
                Un atelier equipe, des techniciens qualifies et des pieces de qualite pour des resultats durables.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article className="service-card" key={service.title}>
                    <Icon size={26} aria-hidden="true" />
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <a href="#contact">
                      En savoir plus <ArrowRight size={15} aria-hidden="true" />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="flottes" className="fleet-section">
          <Image
            src="/images/garage/garage-fleet.webp"
            alt="Vehicules de flotte entretenus en garage a Antananarivo"
            fill
            sizes="100vw"
            className="fleet-image"
          />
          <div className="fleet-overlay" />
          <div className="container fleet-content">
            <p className="section-label">Flottes & professionnels</p>
            <h2>Solutions dediees aux taxis, VTC et petites flottes</h2>
            <p>
              Des formules d'entretien adaptees pour reduire vos immobilisations et maitriser vos couts.
            </p>
            <ul>
              <li>
                <Check size={18} aria-hidden="true" /> Tarifs preferentiels
              </li>
              <li>
                <Check size={18} aria-hidden="true" /> Priorite atelier
              </li>
              <li>
                <Check size={18} aria-hidden="true" /> Suivi digital et reporting
              </li>
              <li>
                <Check size={18} aria-hidden="true" /> Facturation mensuelle
              </li>
            </ul>
            <a className="btn primary" href="#contact">
              Demander une offre flotte <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section id="engagements" className="section commitments-section">
          <div className="container">
            <div className="section-header center">
              <p className="section-label">Nos engagements</p>
              <h2>La qualite, la transparence, la confiance</h2>
            </div>
            <div className="commitment-grid">
              {trustItems.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title}>
                    <span>
                      <Icon size={28} aria-hidden="true" />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="zones" className="zones-section">
          <div className="container zones-layout">
            <div className="zones-copy">
              <p className="section-label">Zones d'intervention</p>
              <h2>Nous couvrons Antananarivo et ses environs</h2>
              <p>Proches de vous pour un service rapide et fiable.</p>
              <div className="zone-list">
                {zones.map((zone) => (
                  <article key={zone.name}>
                    <MapPin size={20} aria-hidden="true" />
                    <div>
                      <strong>{zone.name}</strong>
                      <span>{zone.detail}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="map-panel" aria-label="Carte stylisee d'Antananarivo">
              <div className="map-shape" />
              {["Ankorondrano", "Ivandry", "Antananarivo", "Androhibe", "Anosizato", "Ambatofotsy"].map(
                (pin, index) => (
                  <span className={`map-pin pin-${index + 1}`} key={pin}>
                    <MapPin size={15} aria-hidden="true" />
                    {pin}
                  </span>
                ),
              )}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-layout">
            <div className="contact-copy">
              <p className="section-label">Prendre rendez-vous ou demander un devis</p>
              <h2>Planifiez votre entretien ou demandez un devis flotte</h2>
              <div className="contact-list">
                <a href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}>
                  <Phone size={21} aria-hidden="true" />
                  <span>
                    <strong>{siteConfig.phone}</strong>
                    <small>{siteConfig.hours}</small>
                  </span>
                </a>
                <a href={siteConfig.whatsapp}>
                  <Wrench size={21} aria-hidden="true" />
                  <span>
                    <strong>WhatsApp</strong>
                    <small>Reponse rapide</small>
                  </span>
                </a>
                <a href="#zones">
                  <MapPin size={21} aria-hidden="true" />
                  <span>
                    <strong>{siteConfig.address}</strong>
                    <small>Antananarivo 101</small>
                  </span>
                </a>
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail size={21} aria-hidden="true" />
                  <span>
                    <strong>{siteConfig.email}</strong>
                    <small>Devis et flottes</small>
                  </span>
                </a>
              </div>
            </div>
            <AppointmentForm />
          </div>
        </section>

        <section className="final-cta">
          <Image
            src="/images/garage/garage-cta.webp"
            alt="Mecanicien inspectant un moteur en atelier"
            fill
            loading="eager"
            sizes="100vw"
            className="final-cta-image"
          />
          <div className="final-cta-overlay" />
          <div className="container final-cta-content">
            <div className="final-cta-box">
              <h2>Votre vehicule merite le meilleur, notre equipe est prete.</h2>
              <a className="btn primary" href="#contact">
                Prendre rendez-vous <CalendarDays size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <Link className="brand footer-brand" href="#accueil">
              <span className="brand-mark">
                <CarFront size={23} aria-hidden="true" />
              </span>
              <span>
                <strong>{siteConfig.name}</strong>
                <small>{siteConfig.tagline}</small>
              </span>
            </Link>
            <p>
              Votre garage de confiance a Antananarivo pour l'entretien et la reparation de tous types de vehicules.
            </p>
          </div>
          <div>
            <h3>Nos services</h3>
            <a href="#services">Entretien periodique</a>
            <a href="#services">Diagnostic electronique</a>
            <a href="#services">Freinage & suspension</a>
            <a href="#services">Climatisation</a>
            <a href="#services">Reparation generale</a>
          </div>
          <div>
            <h3>Informations</h3>
            <a href="#engagements">A propos</a>
            <a href="#zones">Zones d'intervention</a>
            <a href="#engagements">Garantie & engagements</a>
            <a href="#flottes">Carrieres</a>
            <a href="#services">Actualites</a>
          </div>
          <div>
            <h3>Contact</h3>
            <a href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}>{siteConfig.phone}</a>
            <a href={siteConfig.whatsapp}>WhatsApp</a>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <span>{siteConfig.address}</span>
            <span>{siteConfig.hours}</span>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>(c) 2026 Garage Urbain Premium Tana. Tous droits reserves.</span>
          <span>Mentions legales - Politique de confidentialite</span>
        </div>
      </footer>
    </>
  );
}
