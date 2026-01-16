---
title: "Utilisation des LLM pour la veille : comment ne pas se faire piéger"
date: 2026-01-15
image: images/llm.jpg
draft: false
tags: ["LLM", "méthodologie", "veille", "intelligence-artificielle"]
---

## Qu'est-ce qu'un LLM ?

Un **Large Language Model** (LLM) comme ChatGPT, Claude ou Gemini est un modèle d'intelligence artificielle entraîné sur de grands corpus de textes pour produire des réponses probabilistes. 

**Point crucial** : un LLM n'est **pas une source** en soi. C'est un outil qui recombine des connaissances déjà publiées, parfois avec des erreurs ou des approximations.

## Les risques pour une pratique de veille

### 1. Les hallucinations
Les LLM peuvent produire des informations fausses mais très bien formulées. Ils "hallucinent" des faits, des citations ou des sources qui n'existent pas.

**Exemple** : demander une référence bibliographique peut donner un titre d'article plausible, un auteur crédible, mais un contenu totalement inventé.

### 2. Sources manquantes ou approximatives
Même quand le LLM cite une source, celle-ci peut être :
- Mal référencée (date incorrecte, mauvais auteur)
- Hors contexte
- Interprétée de manière erronée

### 3. Biais reproduits
Les LLM reproduisent les biais présents dans leurs données d'entraînement : biais culturels, représentations stéréotypées, surreprésentation de certaines perspectives au détriment d'autres.

### 4. Perte d'esprit critique
Le danger principal : copier/coller sans vérifier. La fluidité des réponses d'un LLM peut donner une impression de fiabilité qui n'est pas toujours justifiée.

## Bonnes pratiques pour un usage "veille"

### Toujours demander des sources précises
- Demandez explicitement : "Donne-moi l'auteur, la date, le lien de chaque source"
- Vérifiez systématiquement les points sensibles dans les articles originaux

### Ne jamais utiliser un LLM comme preuve en soi
Un LLM peut :
- Clarifier un concept technique
- Générer des plans, des checklists, des taxonomies
- Reformuler ou résumer des idées

Mais il ne doit **jamais** être la seule source d'information pour un point factuel important.

### Vérifier, toujours vérifier
Pour chaque information importante fournie par un LLM :
1. Retrouvez la source primaire
2. Lisez le contexte original
3. Croisez avec d'autres sources

## Mécanismes pour mieux mémoriser et structurer sa veille

### 1. Réécrire en synthèse courte
Après chaque ressource consultée (via LLM ou non), rédigez une synthèse de 10 lignes maximum **dans vos propres mots**. Cela force la compréhension et l'appropriation.

### 2. Lier à une compétence 2025
Pour chaque ressource, identifiez explicitement quelle(s) compétence(s) du Future of Jobs Report elle mobilise :
- Créativité
- Analytical thinking
- Technology design
- Critical thinking
- Etc.

### 3. Projeter l'utilisation future
Notez concrètement : "Cette ressource me servira pour [projet X], dans le contexte de [Y]."

**Exemple** : "Cette étude sur les pipelines 3D temps réel me sera utile pour mon TB sur l'optimisation de workflows CGI pour la mode."

### 4. Classer dans une bibliothèque personnelle
Organisez vos ressources dans une structure pérenne :
- `/articles/` – synthèses de veille
- `/outils/` – fiches techniques
- `/inspiration/` – cas créatifs

Avec des **tags** systématiques : `#3D`, `#wearable`, `#character-design`, `#IA-generative`, etc.

## Conclusion

Les LLM sont de puissants assistants pour accélérer la recherche, clarifier des concepts et organiser l'information. Mais ils ne remplacent pas :
- La lecture des sources primaires
- L'esprit critique
- La vérification factuelle

Pour une veille solide, utilisez les LLM comme des **accélérateurs**, jamais comme des **sources de vérité**.

## Sources

- OpenAI, "GPT-4 Technical Report" (2023) : https://arxiv.org/abs/2303.08774
- OpenAI, "GPT-4 System Card" (2023) : https://cdn.openai.com/papers/gpt-4-system-card.pdf
- NIST, "AI Risk Management Framework 1.0" (2023) : https://www.nist.gov/itl/ai-risk-management-framework
