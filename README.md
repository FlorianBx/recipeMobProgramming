# Projet Angular : Gestionnaire de Recettes avec CRUD localStorage

## Objectif
Créer une application web Angular pour gérer une collection de recettes de cuisine, en utilisant le localStorage pour la persistance des données.

## Fonctionnalités requises

1. **Affichage des recettes**
   - Créer une page d'accueil listant toutes les recettes
   - Chaque recette dans la liste doit afficher son nom et le temps de préparation

2. **Ajout de recette**
   - Implémenter un formulaire pour ajouter une nouvelle recette
   - Les champs requis sont : nom, ingrédients, instructions, temps de préparation

3. **Affichage détaillé**
   - Créer une page de détails pour chaque recette
   - Afficher toutes les informations de la recette

4. **Modification de recette**
   - Permettre la modification des informations d'une recette existante
   - Utiliser le même formulaire que pour l'ajout, mais pré-rempli avec les données existantes

5. **Suppression de recette**
   - Ajouter une option pour supprimer une recette
   - Demander une confirmation avant la suppression

6. **Persistance des données**
   - Utiliser le localStorage pour sauvegarder les recettes
   - Charger les recettes depuis le localStorage au démarrage de l'application

## Structure de données

```typescript
interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
  prepTime: number; // en minutes
  imageUrl?: string;
}
```

## Exigences techniques

1. Utiliser Angular (version 18+)
2. Créer un service pour gérer les opérations CRUD
3. Implémenter le routing pour naviguer entre les différentes vues
4. Utiliser des formulaires réactifs pour l'ajout et la modification des recettes
5. Appliquer une structure de projet propre (components, services, models)
6. Ajouter une validation basique des formulaires

## Bonus (optionnels)

1. Ajouter une fonction de recherche pour filtrer les recettes par nom
2. Implémenter une catégorisation des recettes (entrée, plat, dessert)
3. Ajouter des animations simples pour améliorer l'expérience utilisateur
4. Ajouter une image depuis Unsplash ou autres

## Critères d'évaluation

1. Fonctionnalité : L'application remplit-elle toutes les exigences de base ?
2. Code : Le code est-il propre, bien organisé ?
3. UX/UI : L'interface est-elle intuitive et agréable à utiliser ?
4. Gestion des erreurs : L'application gère-t-elle correctement les cas d'erreur ?
5. Bonus : Des fonctionnalités supplémentaires ont-elles été implémentées ?
