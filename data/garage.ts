import {
  BatteryCharging,
  CalendarCheck,
  Car,
  CheckCircle2,
  Gauge,
  MapPin,
  MessageCircle,
  ShieldCheck,
  SlidersHorizontal,
  Snowflake,
  Truck,
  Wrench,
} from "lucide-react";

export const siteConfig = {
  name: "Garage Urbain",
  tagline: "Premium Tana",
  phone: "034 00 000 00",
  email: "contact@garage-urbain-tana.mg",
  address: "Route des Hydrocarbures, Antananarivo 101",
  hours: "Lun. - Sam. 7h30 - 17h30",
  whatsapp: "https://wa.me/261340000000",
};

export const services = [
  {
    title: "Entretien periodique",
    description: "Vidange, filtres, niveaux et controles essentiels.",
    icon: SlidersHorizontal,
  },
  {
    title: "Diagnostic electronique",
    description: "Lecture defauts, capteurs et electricite embarquee.",
    icon: Gauge,
  },
  {
    title: "Freinage & suspension",
    description: "Plaquettes, disques, amortisseurs et controle complet.",
    icon: ShieldCheck,
  },
  {
    title: "Climatisation",
    description: "Recharge, recherche de fuite et entretien complet.",
    icon: Snowflake,
  },
  {
    title: "Pneumatiques",
    description: "Montage, equilibrage et parallelisme.",
    icon: Car,
  },
  {
    title: "Distribution",
    description: "Courroie, chaine, galets et pompe a eau.",
    icon: Wrench,
  },
  {
    title: "Batterie & demarrage",
    description: "Test batterie, alternateur et remplacement.",
    icon: BatteryCharging,
  },
  {
    title: "Reparation generale",
    description: "Moteur, boite, embrayage et toutes marques.",
    icon: CheckCircle2,
  },
];

export const trustItems = [
  {
    title: "Pieces de qualite",
    description: "Des pieces selectionnees pour leur fiabilite.",
    icon: ShieldCheck,
  },
  {
    title: "Garantie travaux",
    description: "Jusqu'a 12 mois sur la main d'oeuvre et les pieces.",
    icon: CheckCircle2,
  },
  {
    title: "Devis transparent",
    description: "Aucun frais cache, vous decidez en toute clarte.",
    icon: CalendarCheck,
  },
  {
    title: "Respect des delais",
    description: "Des rendez-vous tenus et un service efficace.",
    icon: Gauge,
  },
];

export const zones = [
  {
    name: "Antananarivo centre",
    detail: "Analakely, Soarano, Isoraka, Ambatovinaky",
  },
  {
    name: "Atsimondrano",
    detail: "Ivandry, Ambohimanarina, Alasora",
  },
  {
    name: "Avaradrano",
    detail: "Androhibe, Ankadikely, Sabotsy Namehana",
  },
  {
    name: "Autres communes",
    detail: "Sur demande selon disponibilite",
  },
];

export const heroBadges = [
  {
    title: "Devis clair",
    description: "Rapide et gratuit",
    icon: CalendarCheck,
  },
  {
    title: "Suivi WhatsApp",
    description: "Reponse rapide",
    icon: MessageCircle,
  },
  {
    title: "Entretien flotte",
    description: "Offres dediees",
    icon: Truck,
  },
];
