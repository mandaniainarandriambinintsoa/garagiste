# Garage Antananarivo Showcase Memory

## Role du projet

Prototype vendable de site vitrine pour un garage automobile a Antananarivo.

Direction retenue par Manda : mix A + B.

- A : confiance, serieux, diagnostic clair, devis avant reparation.
- B : rapidite, prise de RDV simple, WhatsApp direct, conversion mobile.

Positionnement : garage fiable a Antananarivo pour particuliers, taxis/VTC et petites flottes qui veulent un diagnostic clair, un devis avant intervention et une prise de rendez-vous rapide.

## Process obligatoire avant code

Ne pas coder directement apres le brief.

Parcours valide :

1. Comprendre le secteur et la ville.
2. Proposer 3 directions de maquette.
3. Generer des images de design complet, du navbar jusqu'au footer.
4. Attendre que Manda choisisse une maquette ou demande des modifications.
5. Seulement apres validation, coder le site dans ce dossier.

Erreur deja faite : le projet a ete initialise trop vite avec quelques fichiers de base avant validation visuelle. Garder ces fichiers en pause et ne pas continuer le build tant que la maquette complete n'est pas validee.

## Maquettes a produire maintenant

3 designs complets pour garage a Antananarivo :

- Maquette 1 : Garage Confiance Tana, sobre, clair, rassurant.
- Maquette 2 : Diagnostic Express Tana, plus dynamique, noir/jaune, WhatsApp/RDV rapide.
- Maquette 3 : Garage Urbain Premium, plus moderne, flottes/SUV/VTC, sombre premium.

Les images doivent montrer la page entiere : navbar, hero, services, methode, confiance, zones Antananarivo, formulaire RDV, CTA final, footer.

## Maquettes generees

Les 3 maquettes completes ont ete generees et sauvegardees dans :

- `assets/design-directions/maquette-1-garage-confiance-tana.png`
- `assets/design-directions/maquette-2-diagnostic-express-tana.png`
- `assets/design-directions/maquette-3-garage-urbain-premium-tana.png`

Attendre le choix ou les retours de Manda avant de continuer le code.

## Choix valide et implementation

Manda a choisi la maquette 3 : Garage Urbain Premium Tana.

Implementation realisee :

- page complete Next.js fidele a la maquette 3 ;
- hero sombre premium avec atelier + Antananarivo ;
- services en grille blanche ;
- section flottes/taxis/VTC sombre ;
- engagements qualite/transparence/confiance ;
- zone d'intervention Antananarivo avec carte stylisee ;
- formulaire de rendez-vous/devis flotte avec confirmation avant envoi ;
- API route `app/api/appointment/route.ts` prete pour relais n8n via `N8N_APPOINTMENT_WEBHOOK_URL` et `GARAGE_WEBHOOK_SECRET` ;
- images finales WebP dans `public/images/garage/`.

Verification :

- `npm run build` OK ;
- rendu desktop et mobile verifie avec Playwright + Chrome local ;
- pas d'erreur console, pas de requete echouee, pas d'overflow horizontal ;
- serveur local teste sur `http://localhost:3022`.

## Workflow n8n

Workflow cree et publie le 2026-05-29 dans l'instance n8n `https://n8n.manda-ia.com`.

- nom : `Garage Antananarivo - Rendez-vous` ;
- ID workflow : `Q4cJjxtCjd3ZUQwi` ;
- dossier n8n : `Clients / Garage Antananarivo` ;
- webhook : `https://n8n.manda-ia.com/webhook/garage-antananarivo-appointment` ;
- variables locales ajoutees dans `.env.local` : `N8N_APPOINTMENT_WEBHOOK_URL`, `GARAGE_WEBHOOK_SECRET` ;
- secret source conserve aussi cote dossier n8n dans `.garage_secrets` ;
- test webhook direct OK ;
- test via `POST http://127.0.0.1:3000/api/appointment` OK ;
- serveur local redemarre sur `http://127.0.0.1:3000` avec `.env.local` charge.

Le workflow valide le secret, normalise la demande, cree un evenement Google Calendar, envoie un email interne au garage et renvoie une reponse JSON. Le garage confirme manuellement le creneau avant intervention.

## GitHub / Vercel

Repo GitHub cree le 2026-05-29 :

- nom : `garagiste` ;
- URL : `https://github.com/mandaniainarandriambinintsoa/garagiste` ;
- branche : `master`.

Projet Vercel cree et connecte au repo :

- projet : `garagiste` ;
- URL production alias : `https://garagiste-zeta.vercel.app` ;
- inspect deploy : `https://vercel.com/mandas-projects-d5939030/garagiste/F3nZ51UrxfD9cznH1cvj9UVtvKsT` ;
- variables Vercel production ajoutees : `N8N_APPOINTMENT_WEBHOOK_URL`, `GARAGE_WEBHOOK_SECRET`.

Verification production :

- `GET https://garagiste-zeta.vercel.app` OK 200 ;
- `POST https://garagiste-zeta.vercel.app/api/appointment` OK 200 avec relais n8n ;
- une demande `TEST Vercel Prod` a ete envoyee, a ignorer cote email/calendar.
