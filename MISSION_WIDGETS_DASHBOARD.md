# Mission Codex — Ajouter un système de widgets modulaires au dashboard de nouvel onglet

## Contexte actuel du projet

Je développe une extension Chrome de nouvel onglet personnalisée.

Le projet a déjà été nettoyé et reconstruit sur une base minimaliste sombre.

Actuellement, le dashboard contient déjà :

- un fond noir / gris très sobre ;
- une barre de recherche intelligente ;
- un menu custom pour choisir le moteur de recherche ;
- des moteurs comme Google, YouTube, GitHub, ChatGPT et Stack Overflow ;
- des listes de liens personnalisées ;
- des sections de liens avec titre ;
- ajout / modification / suppression de liens ;
- ajout / modification / suppression de sections ;
- drag and drop des liens ;
- drag and drop des sections ;
- stockage local via `chrome.storage.local` avec fallback `localStorage` ;
- plusieurs dashboards internes en haut de page :
  - Travail ;
  - Université ;
  - Loisirs ;
  - Tout.

Le dashboard ne doit pas être recommencé de zéro.

Il faut construire au-dessus de l’architecture actuelle.

---

# Objectif de cette mission

Transformer le système actuel de listes de liens en un système plus général de widgets.

Aujourd’hui, une section de liens est le seul type de bloc vraiment utilisé.

Je veux maintenant pouvoir ajouter différents types de widgets au dashboard, tout en gardant la logique existante :

- chaque bloc est déplaçable ;
- chaque bloc est sauvegardé ;
- chaque bloc appartient à un dashboard ou peut être visible dans certains dashboards ;
- chaque bloc garde le style sombre minimaliste actuel.

L’objectif est que Codex avance au maximum pendant plusieurs heures.

Il faut traiter les tâches dans l’ordre, sans rester bloqué trop longtemps sur un seul widget.

---

# Règle de progression importante

Travailler tâche après tâche.

Si une fonctionnalité pose trop de problèmes :

1. ne pas casser le dashboard existant ;
2. laisser le code dans un état stable ;
3. ajouter un commentaire `TODO` ;
4. passer à la fonctionnalité suivante.

L’objectif n’est pas de finir parfaitement un seul widget.

L’objectif est d’obtenir une base fonctionnelle pour un maximum de widgets.

Priorité :

1. ne pas casser l’existant ;
2. garder le build fonctionnel ;
3. avancer sur le système de widgets ;
4. implémenter les widgets simples ;
5. implémenter les widgets plus avancés ensuite.

---

# État actuel à préserver absolument

Ne pas supprimer ni casser :

- la barre de recherche intelligente ;
- le menu custom des moteurs de recherche ;
- les dashboards internes en haut ;
- les listes de liens existantes ;
- les liens déjà ajoutés ;
- les migrations de données déjà écrites ;
- le stockage `chrome.storage.local` / `localStorage` ;
- le drag and drop existant ;
- l’interface sombre minimaliste.

Les dashboards actuels doivent continuer à fonctionner.

Les sections déjà existantes doivent être converties ou adaptées proprement au nouveau système de widgets, mais elles ne doivent pas disparaître.

---

# Correction préalable — Favicons des liens

Avant d’ajouter les widgets, corriger l’affichage actuel des favicons dans les listes de liens.

## Problème

Les logos / favicons des liens ont un léger contour gris foncé, comme s’ils étaient dans une petite box.

## Changement demandé

Je veux :

- plus aucune box visible autour du favicon ;
- plus aucun contour ;
- plus aucun fond gris foncé autour du logo ;
- uniquement le logo centré ;
- taille propre ;
- alignement propre ;
- hover du lien autorisé, mais pas de box autour du favicon lui-même.

Le style doit rester minimaliste.

---

# Nouvelle logique — Système de widgets

## Objectif

Remplacer la logique “ajouter une section de liens” par une logique “ajouter un widget”.

La section de liens actuelle devient simplement un type de widget :

```ts
"link-list"
```

Les nouveaux types de widgets à ajouter :

```ts
"spacer"
"todo"
"quick-note"
"qr-code"
"markdown-editor"
"text-diff"
"calendar"
"kanban"
"daily-quiz"
"image-compression"
"uptime-monitor"
```

Ne pas ajouter pour l’instant :

```ts
"weather"
"translation"
```

---

# Widgets à afficher dans le sélecteur d’ajout

Quand l’utilisateur ajoute un nouveau bloc au dashboard, il doit pouvoir choisir :

- Link List
- Spacer
- Todo
- Quick Note
- QR Code Generator
- Markdown Editor
- Text Diff
- Calendar
- Kanban Tasks
- Daily Quiz
- Image Compression
- Uptime Monitor

Weather et Translation ne doivent pas être visibles dans le sélecteur.

---

# Structure de données souhaitée

Adapter au code existant, mais viser une structure proche de ceci :

```ts
type WidgetType =
  | "link-list"
  | "spacer"
  | "todo"
  | "quick-note"
  | "qr-code"
  | "markdown-editor"
  | "text-diff"
  | "calendar"
  | "kanban"
  | "daily-quiz"
  | "image-compression"
  | "uptime-monitor";
```

Chaque widget doit avoir au minimum :

```ts
type DashboardWidget = {
  id: string;
  type: WidgetType;
  title?: string;
  dashboardIds?: string[];
  order: number;
  config?: Record<string, unknown>;
};
```

Adapter au modèle actuel si les sections sont déjà organisées autrement.

Le point important :

- les anciennes sections de liens doivent continuer à marcher ;
- les nouveaux widgets doivent être compatibles avec le système de dashboards ;
- chaque widget doit être déplaçable ;
- chaque widget doit être persisté.

---

# Registry de widgets

Créer une logique propre de rendu par type.

Exemple :

```ts
const widgetRegistry = {
  "link-list": LinkListWidget,
  "spacer": SpacerWidget,
  "todo": TodoWidget,
  "quick-note": QuickNoteWidget,
  "qr-code": QRCodeWidget,
  "markdown-editor": MarkdownEditorWidget,
  "text-diff": TextDiffWidget,
  "calendar": CalendarWidget,
  "kanban": KanbanWidget,
  "daily-quiz": DailyQuizWidget,
  "image-compression": ImageCompressionWidget,
  "uptime-monitor": UptimeMonitorWidget,
};
```

Ne pas faire un gros `if/else` énorme si une structure registry est possible.

---

# Dashboards internes

Le projet contient déjà des dashboards internes :

- Travail ;
- Université ;
- Loisirs ;
- Tout.

Les widgets doivent s’intégrer à cette logique.

## Règles attendues

- Un widget ajouté depuis le dashboard actif doit être associé à ce dashboard.
- Le dashboard `Tout` doit afficher tous les widgets.
- Les listes existantes doivent continuer à apparaître dans les bons dashboards.
- Les widgets doivent pouvoir être déplacés dans l’ordre du dashboard affiché.
- Ne pas rendre les widgets introuvables après ajout.

Si l’architecture actuelle filtre les sections par dashboard, étendre cette logique aux widgets.

---

# Design général des widgets

Les captures fournies montrent un style commun.

Tous les widgets doivent suivre ce style :

- thème sombre ;
- carte gris foncé ;
- coins arrondis ;
- bordure subtile ;
- titre en haut à gauche ;
- icône à gauche du titre ;
- contenu au centre ;
- boutons discrets ;
- texte secondaire gris ;
- pas de blanc pur ;
- pas de couleurs fortes, sauf accent vert déjà utilisé dans le projet ;
- interface compacte ;
- cohérence avec le reste du dashboard.

Ne pas créer un design différent pour chaque widget.

Utiliser les variables CSS / classes existantes si elles existent.

---

# Utilisation des captures d’écran fournies

Pour chaque widget à implémenter, je vais fournir une capture d’écran de référence.

Tu dois regarder attentivement la capture correspondant au widget avant de le coder.

Les captures doivent servir de référence pour :

- la structure générale du widget ;
- la disposition des éléments ;
- les espacements ;
- les tailles ;
- les arrondis ;
- les bordures ;
- les icônes ;
- les boutons ;
- les états visuels ;
- la hiérarchie du texte ;
- le style général sombre / minimaliste.

L’objectif n’est pas de recopier une image statique, mais de reproduire le design sous forme de vrai composant fonctionnel.

Chaque widget doit donc être à la fois :

- visuellement proche de sa capture de référence ;
- réellement utilisable ;
- intégré au système de widgets ;
- cohérent avec le style global déjà présent dans le dashboard.

Si une capture contient un élément purement démonstratif, tu peux l’adapter pour que le widget soit réellement fonctionnel, mais il faut garder l’apparence générale aussi proche que possible.

Ne pas ignorer les captures.

Ne pas créer une interface générique différente si une capture est fournie.

Ne pas implémenter Weather ou Translation, même si des captures existent pour ces widgets.

---

# Ordre de travail obligatoire

Travailler dans cet ordre :

1. Corriger les favicons des liens.
2. Créer / adapter le système de widgets.
3. Adapter les listes actuelles comme widget `link-list`.
4. Ajouter le sélecteur de type de widget.
5. Implémenter `Spacer`.
6. Implémenter `Todo`.
7. Implémenter `Quick Note`.
8. Implémenter `QR Code Generator`.
9. Implémenter `Markdown Editor`.
10. Implémenter `Text Diff`.
11. Implémenter `Calendar`.
12. Implémenter `Kanban Tasks`.
13. Implémenter `Daily Quiz`.
14. Implémenter `Image Compression`.
15. Implémenter `Uptime Monitor`.

---

# Widget 1 — Link List

Le widget Link List doit conserver le style déjà présent dans le projet, mais il faut aussi tenir compte des captures précédentes données pour les lignes de liens et les favicons.

## Objectif

Conserver la fonctionnalité existante de listes de liens.

Ce widget existe déjà conceptuellement. Il faut simplement l’intégrer dans le nouveau système général de widgets.

## À préserver

- titre de section ;
- liste de liens ;
- favicon ;
- nom du lien ;
- URL ;
- ajout ;
- modification ;
- suppression ;
- drag and drop des liens ;
- drag and drop de la section / du widget ;
- stockage local ;
- appartenance aux dashboards.

## Important

Ne pas régresser sur cette fonctionnalité.

C’est le widget de base du dashboard.

---

# Widget 2 — Spacer

Regarde la capture d’écran fournie pour ce widget et utilise-la comme référence visuelle principale.

## Objectif

Créer un widget simple pour ajouter de l’espace entre les widgets.

## Fonctionnalités

- Afficher une carte “Spacer”.
- Permettre de régler la hauteur.
- Sauvegarder la hauteur localement.
- Pouvoir déplacer le widget comme les autres.
- Aucun appel réseau.
- Aucun contenu complexe.

## Texte descriptif

```txt
Use it to add breathing room between widgets
```

---

# Widget 3 — Todo

Regarde la capture d’écran fournie pour ce widget et utilise-la comme référence visuelle principale.

## Objectif

Créer une liste de tâches simple.

## Fonctionnalités V1

- Ajouter une tâche.
- Cocher une tâche.
- Décocher une tâche.
- Supprimer une tâche.
- Modifier le texte d’une tâche si simple.
- Afficher les tâches terminées en barré / atténué.
- Sauvegarder localement.

## Design

Suivre la capture `Todo`.

Interface attendue :

- titre “Todo” ;
- champ “Add a new todo…” ;
- liste de tâches ;
- icône check ;
- lignes séparées subtilement.

---

# Widget 4 — Quick Note

Regarde la capture d’écran fournie pour ce widget et utilise-la comme référence visuelle principale.

## Objectif

Créer une note rapide locale.

## Fonctionnalités V1

- Zone de texte éditable.
- Sauvegarde automatique.
- Bouton copier.
- Bouton clear / reset discret.
- Date de dernière modification si simple.

## Texte descriptif

```txt
Capture ideas, code snippets, tasks, or reminders directly on your start page – always one click away.
```

---

# Widget 5 — QR Code Generator

Regarde la capture d’écran fournie pour ce widget et utilise-la comme référence visuelle principale.

## Objectif

Créer un générateur de QR code local.

## Fonctionnalités V1

- Champ texte / URL.
- Génération automatique.
- Bouton download PNG.
- Bouton copier si possible.
- Bouton reset.
- Sauvegarde de la dernière valeur.

## Librairie recommandée

Utiliser une librairie fiable :

```txt
qrcode
```

ou une librairie équivalente déjà compatible avec le projet.

Aucune API externe.

## Texte descriptif

```txt
Generate QR codes from text or URLs
```

---

# Widget 6 — Markdown Editor

Regarde la capture d’écran fournie pour ce widget et utilise-la comme référence visuelle principale.

## Objectif

Créer un éditeur Markdown avec preview.

## Fonctionnalités V1

- Zone d’édition Markdown.
- Preview en direct.
- Mode édition seule.
- Mode preview seule.
- Mode split si simple.
- Bouton copier.
- Bouton télécharger `.md`.
- Sauvegarde automatique.
- Contenu initial par défaut.

## Librairie recommandée

Utiliser :

```txt
marked
```

ou équivalent.

Attention à ne pas introduire de risque XSS évident avec du HTML brut.

## Texte descriptif

```txt
Write and preview Markdown with a live editable preview
```

---

# Widget 7 — Text Diff

Regarde la capture d’écran fournie pour ce widget et utilise-la comme référence visuelle principale.

## Objectif

Créer un outil de comparaison de textes.

## Fonctionnalités V1

- Zone `Original`.
- Zone `Modified`.
- Affichage du diff.
- Ajouts visibles.
- Suppressions visibles.
- Parties inchangées visibles.
- Bouton reset.
- Bouton copier le résultat si pertinent.
- Sauvegarde locale.

## Librairie recommandée

Utiliser :

```txt
diff
```

ou équivalent.

## Texte descriptif

```txt
Compare two texts side by side and see additions, deletions, and changes highlighted
```

---

# Widget 8 — Calendar

Regarde la capture d’écran fournie pour ce widget et utilise-la comme référence visuelle principale.

## Objectif

Créer un petit calendrier local simple.

Aucune connexion Google Calendar.

## Fonctionnalités V1

- Vue mensuelle.
- Mois et année affichés.
- Bouton mois précédent.
- Bouton mois suivant.
- Bouton retour au mois actuel.
- Jour actuel surligné.
- Jours de la semaine.
- Aucun compte.
- Aucune API externe.
- Aucun événement complexe pour la V1.

## Texte descriptif

```txt
A simple calendar showing the current day, week, or month
```

---

# Widget 9 — Kanban Tasks

Regarde la capture d’écran fournie pour ce widget et utilise-la comme référence visuelle principale.

## Objectif

Créer un tableau Kanban local.

## Colonnes par défaut

- To Do
- In Progress
- Done

## Fonctionnalités V1

- Ajouter une carte.
- Modifier une carte.
- Supprimer une carte.
- Déplacer les cartes entre colonnes.
- Réordonner les cartes si simple.
- Sauvegarder localement.
- Ajouter un tag ou une couleur simple si facile.

## Drag and drop

Réutiliser la solution de drag and drop déjà utilisée dans le projet si possible.

Si elle ne convient pas, utiliser une solution robuste comme :

```txt
@dnd-kit/core
```

Ne pas coder un drag and drop fragile à la main si une solution fiable existe déjà.

## Texte descriptif

```txt
A kanban board to organize and track your tasks
```

---

# Widget 10 — Daily Quiz

Regarde la capture d’écran fournie pour ce widget et utilise-la comme référence visuelle principale.

## Objectif

Créer un quiz quotidien basé sur une base locale de questions.

## Fonctionnalités V1

- Base locale de questions en JSON.
- Une question par jour.
- Choix déterministe basé sur la date.
- 4 réponses possibles.
- Une seule bonne réponse.
- Correction après réponse.
- Historique des réponses sauvegardé localement.
- Catégorie affichée.
- Explication affichée si disponible.

## Important

Ne pas utiliser d’API externe.

Ne pas générer les questions avec IA.

La même journée doit toujours afficher la même question.

Exemple de logique :

```ts
const dayKey = new Date().toISOString().slice(0, 10);
const index = hashDate(dayKey) % questions.length;
const todaysQuestion = questions[index];
```

## Format suggéré

```ts
type QuizQuestion = {
  id: string;
  category: string;
  question: string;
  answers: string[];
  correctAnswerIndex: number;
  explanation?: string;
};
```

## Texte descriptif

```txt
A fun daily quiz with trivia questions
```

---

# Widget 11 — Image Compression

Regarde la capture d’écran fournie pour ce widget et utilise-la comme référence visuelle principale.

## Objectif

Créer un outil de compression d’images côté navigateur.

## Scope V1 strict

Supporter uniquement :

- JPG
- PNG
- WebP

Ne pas gérer :

- AVIF ;
- SVG ;
- formats complexes.

## Fonctionnalités V1

- Drag and drop d’images.
- Sélection via input file.
- Compression côté navigateur.
- Afficher l’image originale.
- Afficher la taille originale.
- Afficher la taille compressée.
- Afficher le pourcentage de réduction.
- Bouton download pour chaque image.
- Option qualité si simple.
- Gestion propre des erreurs de format.

## Technique

Utiliser `canvas` côté navigateur ou une librairie front-end adaptée.

Aucun backend.

Aucune API externe.

Aucun upload serveur.

## Texte descriptif

```txt
Compress and convert images (PNG, JPG, WebP) in batches, directly in your browser
```

---

# Widget 12 — Uptime Monitor basique

Regarde la capture d’écran fournie pour ce widget et utilise-la comme référence visuelle principale.

## Objectif

Créer un widget Uptime Monitor volontairement simple.

Le widget ne doit pas faire de monitoring continu.

Il doit uniquement vérifier l’état des serveurs :

- au chargement du dashboard ;
- au montage du widget ;
- quand l’utilisateur clique sur refresh.

## Fonctionnalités V1

- Afficher une liste de services.
- Lancer un check automatique au chargement.
- Bouton refresh discret.
- Afficher le statut de chaque service.
- Afficher la latence en millisecondes.
- Afficher le code HTTP quand disponible.
- Afficher une ligne de petites barres représentant les derniers checks.
- Sauvegarder les services et derniers résultats localement.

## À faire

- check uniquement au chargement ;
- check manuel via bouton refresh ;
- stockage local ;
- aucun backend ;
- aucune API externe ;
- aucune notification ;
- aucun check toutes les 5 ou 10 minutes ;
- aucun `chrome.alarms` ;
- aucun monitoring en arrière-plan.

## À ne pas faire

- pas de scheduler ;
- pas de cron ;
- pas de service worker dédié pour ce widget ;
- pas d’email ;
- pas de notification système ;
- pas d’historique complexe ;
- pas de compte utilisateur ;
- pas de Supabase ;
- pas d’analytics avancé.

## Données initiales par défaut

```ts
const defaultServices = [
  {
    id: "api-server",
    name: "API Server",
    url: "https://example.com"
  },
  {
    id: "web-app",
    name: "Web App",
    url: "https://startpagehq.com"
  },
  {
    id: "documentation",
    name: "Documentation",
    url: "https://developer.mozilla.org"
  }
];
```

## Gestion réseau

Pour chaque service :

- mesurer le temps avant / après la requête ;
- tenter un `fetch` ;
- afficher le code HTTP si disponible ;
- considérer comme `up` si status entre 200 et 399 ;
- considérer comme `down` si erreur réseau ou status problématique.

Attention aux problèmes CORS.

Si CORS bloque :

- ne pas créer de backend ;
- ne pas créer de service worker dédié ;
- afficher `Blocked` ou `Unknown` ;
- continuer les autres checks ;
- ne pas bloquer tout le widget.

## Historique visuel

Garder maximum 20 résultats par service.

Couleurs :

- vert = up ;
- gris = unknown / pas encore testé ;
- rouge ou sombre = down, seulement si cohérent avec le style.

---

# Widgets exclus

Ne pas implémenter :

- Weather ;
- Translation.

Ne pas ajouter dans le sélecteur :

- Weather ;
- Translation.

Ne pas intégrer :

- API météo ;
- DeepL ;
- OpenAI ;
- LibreTranslate ;
- Google Calendar ;
- Outlook Calendar ;
- Supabase ;
- backend ;
- authentification.

---

# Qualité attendue

## Ne pas faire

- Ne pas recommencer le projet de zéro.
- Ne pas supprimer les fonctionnalités existantes.
- Ne pas casser les dashboards actuels.
- Ne pas casser les listes de liens.
- Ne pas hardcoder de fausses fonctionnalités.
- Ne pas afficher de widgets purement fake.
- Ne pas créer un fichier énorme avec toute la logique.
- Ne pas ajouter de backend.
- Ne pas ajouter d’API externe inutile.
- Ne pas ajouter Weather ou Translation.
- Ne pas changer les moteurs de recherche existants sauf nécessité technique.
- Ne pas modifier l’esthétique globale vers quelque chose de clair ou coloré.

## Faire

- Créer des widgets V1 simples mais réellement utilisables.
- Garder un style sombre minimaliste.
- Utiliser le stockage existant.
- Garder le dashboard stable.
- Réutiliser le drag and drop existant.
- Garder les composants isolés.
- Ajouter des migrations si la structure de données change.
- Tester régulièrement avec `node --check` ou équivalent.
- Vérifier que le manifest reste propre.
- Résumer les changements à la fin.

---

# Tests et vérifications attendus

À la fin, vérifier :

- le projet build sans erreur ;
- `app.js` passe `node --check` si applicable ;
- le dashboard s’ouvre encore ;
- la recherche intelligente fonctionne encore ;
- le menu de moteur fonctionne encore ;
- les dashboards Travail / Université / Loisirs / Tout fonctionnent encore ;
- les listes de liens existantes sont toujours visibles ;
- les favicons n’ont plus de box grise ;
- les widgets peuvent être ajoutés ;
- les widgets peuvent être déplacés ;
- les widgets sont sauvegardés ;
- les widgets ne disparaissent pas après refresh ;
- le dashboard `Tout` affiche bien tous les widgets ;
- Weather et Translation ne sont pas présents.

---

# Checklist finale

- [ ] Favicons corrigés.
- [ ] Système de widgets créé.
- [ ] Anciennes listes intégrées comme widget `link-list`.
- [ ] Sélecteur d’ajout de widget fonctionnel.
- [ ] Compatibilité avec dashboards existants.
- [ ] Drag and drop conservé.
- [ ] Stockage local conservé.
- [ ] Spacer fonctionnel.
- [ ] Todo fonctionnel.
- [ ] Quick Note fonctionnel.
- [ ] QR Code Generator fonctionnel.
- [ ] Markdown Editor fonctionnel.
- [ ] Text Diff fonctionnel.
- [ ] Calendar fonctionnel.
- [ ] Kanban Tasks fonctionnel.
- [ ] Daily Quiz fonctionnel avec JSON local.
- [ ] Image Compression fonctionnel pour JPG / PNG / WebP.
- [ ] Uptime Monitor fonctionnel au chargement + refresh manuel.
- [ ] Weather exclu.
- [ ] Translation exclu.
- [ ] Pas de backend ajouté.
- [ ] Pas de scheduler ajouté.
- [ ] Pas de service worker ajouté pour Uptime Monitor.
- [ ] Build ou checks statiques OK.
- [ ] Résumé final clair des fichiers modifiés.

---

# Résumé de priorité

La priorité absolue est de réussir le système de widgets sans casser l’existant.

Ensuite :

1. widgets simples ;
2. widgets locaux utiles ;
3. widgets plus avancés ;
4. Uptime Monitor en dernier.

Si tu manques de temps, mieux vaut avoir :

- système de widgets propre ;
- Link List préservé ;
- Spacer ;
- Todo ;
- Quick Note ;
- QR Code ;
- Calendar ;

plutôt qu’un gros ensemble instable.
