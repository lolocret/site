# Site de veille - Lorie Crettex

Site statique de veille créative sur la 3D, CGI, character design et mode wearable, généré avec Hugo.

## Structure du site

### Pages principales

- **`/content/about.md`** : À propos & domaine
  - Présentation du domaine de veille
  - Lien avec les compétences 2025 (World Economic Forum)
  - Axes de veille (Technologie, Esthétique, Mode wearable)

- **`/content/posts/`** : Articles généraux
  - `llm-veille-bonnes-pratiques.md` : Guide sur l'utilisation des LLM pour la veille
  - `systeme-ecoute.md` : Description du système d'écoute et de la méthodologie de veille

### Sections de contenu

#### `/content/veille/`
Articles de veille structurés avec templates.

**Structure de chaque article** :
1. Contexte & source (titre, auteur, date, lien, résumé)
2. Pourquoi je l'ai choisi (lien avec le domaine)
3. En quoi c'est utile (compétences 2025 mobilisées)
4. Quand et comment le réutiliser (projets potentiels)

**Fichiers** :
- `_index.md` : Page d'accueil de la section
- `article-veille-01-template.md` : Template article 1
- `article-veille-02-template.md` : Template article 2
- `article-veille-03-template.md` : Template article 3

#### `/content/outils/`
Fiches techniques sur les logiciels, frameworks et workflows.

**Contenu type** :
- Nom de l'outil
- Cas d'usage
- Avantages & limites
- Ressources pour apprendre

#### `/content/inspiration/`
Cas créatifs, campagnes, moodboards et références visuelles.

**Contenu type** :
- Visuel ou lien
- Contexte (marque, artiste, projet)
- Ce qui rend ce cas intéressant
- Comment m'en inspirer

## Taxonomie (tags)

### Discipline
`#3D`, `#CGI`, `#character-design`, `#illustration`, `#wearable`, `#branding`

### Technologie
`#Blender`, `#Unreal-Engine`, `#IA-generative`, `#pipeline`, `#rendering`

### Thématique
`#tendances`, `#workflow`, `#marketing`, `#storytelling`

### Compétences 2025
`#creativite`, `#analytical-thinking`, `#tech-design`, `#critical-thinking`

## Lancement du site

### Développement local
```bash
hugo server
```

Le site sera accessible sur http://localhost:1313

### Build de production
```bash
hugo
```

Les fichiers statiques sont générés dans le dossier `/public/`

## Pourquoi Hugo et un site statique ?

1. **Durabilité** : HTML/CSS simple, lisible dans 20 ans
2. **Performance** : Pas de base de données, chargement ultra-rapide
3. **Simplicité** : Contenu en Markdown, versionné avec Git
4. **Portabilité** : Hébergeable gratuitement (GitHub Pages, Netlify, Vercel)
5. **Autonomie** : Propriété complète des données et de l'infrastructure


## Compétences développées

Ce site de veille me permet de travailler sur plusieurs compétences identifiées comme clés pour 2025 :

- **Créativité** : curation de contenus visuels, identification de tendances esthétiques
- **Analytical thinking** : analyse critique des sources, structuration de l'information
- **Technology design** : maîtrise d'un SSG (Hugo), gestion de workflows de publication
- **Critical thinking** : évaluation des ressources, vérification des sources (notamment LLM)
- **Active learning** : construction d'un système d'apprentissage continu et documenté
