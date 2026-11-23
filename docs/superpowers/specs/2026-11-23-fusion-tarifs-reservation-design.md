# Fusion Tarifs & Réservation — design

Date : 2026-11-23 · Statut : approuvé

## Intention et pourquoi

La réservation en ligne (cartes Setmore) vit sur `/contact`, une page absente
du menu principal : on n'y accède que par le bouton « Prendre RDV » du header
et un lien de footer. Quelqu'un qui parcourt le menu pour trouver comment
réserver ou écrire ne trouve rien.

En parallèle, `/tarifs` est dans le menu mais constitue un cul-de-sac :
elle affiche des prix sans permettre d'agir.

L'objectif est de réunir prix et action au même endroit, et de rendre les deux
intentions (réserver / écrire) visibles depuis le menu.

## Objectifs

- La réservation est atteignable depuis le menu principal.
- Prix et bouton de réservation au même endroit, en une seule source de vérité.
- La page Contact reste vivante et trouvable, dédiée à l'écrit.
- Aucune régression de référencement.

## Non-objectifs

- Refonte graphique : couleurs, typographie, photos, mise en page restent identiques.
- Changement de tarifs : l'offre reste 2 bilans 2h/110€ + 3 suivis 1h30/80€ (460€).
- Section yoga : le tableau des cours reste tel quel.
- Formulaire de contact : logique, champs et anti-spam inchangés.

## Anti-objectifs (ce qui rendrait le travail raté)

- Supprimer ou renommer une URL existante → 404 et perte de référencement.
- Perdre le formulaire de contact ou le rendre difficile à trouver.
- Se retrouver avec deux endroits où maintenir les tarifs.
- Laisser des boutons « Réserver » qui atterrissent sur une page sans réservation.

## Contraintes

- `/tarifs` et `/contact` conservent leurs URLs exactes. Aucune redirection.
- 15 CTA internes pointent aujourd'hui vers `/contact` ; ils doivent suivre le
  déplacement de la réservation.
- Les cartes de réservation sont alimentées par `lib/setmore.js` (source unique,
  déjà partagée) — elles restent la seule définition des prix affichés côté
  réservation.

## Approches envisagées

1. **Deux pages, rôles distincts (retenue).** `/tarifs` devient « Tarifs &
   Réservation », `/contact` devient la page « écris-moi ». Les deux entrent au
   menu. Aucune URL perdue, chaque page a un rôle lisible.
2. **Fusion totale en une page**, `/contact` redirigée. Plus simple à maintenir,
   mais page très longue, mélange deux intentions, et perte d'une page
   référencée sur « appel découverte Guadeloupe ».
3. **Cartes de réservation dupliquées sur les deux pages.** Aucun risque, mais
   deux endroits à maintenir à chaque changement de tarif — source d'incohérence.

Retenu : approche 1, choisie par la propriétaire du site.

## Ce qui est décidé

### Page `/tarifs` → « Tarifs & Réservation »
- Le tableau « accompagnement » est remplacé par les cartes de réservation
  Setmore (appel découverte, séance bilan, séance de suivi).
- Le paragraphe d'introduction sur la base de 5 séances est conservé.
- Un récapitulatif compact du forfait (5 séances · 460€) reste affiché.
- Tableau yoga, notes importantes : inchangés.
- Le CTA final ne renvoie plus vers la réservation (on y est déjà) mais vers
  `/contact` pour poser une question.

### Page `/contact`
- Les cartes de réservation sont retirées.
- Un bloc court en haut renvoie vers « Tarifs & Réservation ».
- Formulaire, coordonnées, WhatsApp, horaires : inchangés.

### Navigation
- « Accueil » retiré du menu : le logo remplit déjà ce rôle (choix validé).
- « Tarifs » devient « Tarifs & RDV ».
- « Contact » ajouté au menu.
- Le bouton « Prendre RDV » du header pointe vers `/tarifs`.

### CTA internes
Les boutons de réservation (accueil, accompagnement, pages spécialités, FAQ,
à propos, 404) pointent vers `/tarifs`. Les liens relevant du contact écrit
restent sur `/contact`.

### Référencement
- Titres et descriptions des deux pages réalignés sur leur contenu réel.
- `sitemap.js` : priorité `/tarifs` 0.75 → 0.95, `/contact` 0.9 → 0.7.
- Libellé de fil d'Ariane de `/tarifs` mis à jour.
- IndexNow déclenché après déploiement.

## Laissé à l'implémentation

Formulation exacte des titres et micro-textes, ordre des cartes, détail de
l'espacement — à aligner sur le style existant du site.
