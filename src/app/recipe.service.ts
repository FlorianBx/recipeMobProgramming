import { Injectable } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      id: 1,
      name: 'Pizza',
      ingredients: ['Tomato', 'Cheese'],
      description: 'This is a pizza',
      imagePath: 'assets/pizza.jpg',
      prepTime: 30
    },
    {
      id: 2,
      name: 'Pasta',
      ingredients: ['Tomato', 'Cheese'],
      description: 'This is a pasta',
      imagePath: 'assets/pasta.jpg',
      prepTime: 30
    },
    {
      id: 3,
      name: 'Salad',
      ingredients: ['Tomato', 'Cheese'],
      description: 'This is a salad',
      imagePath: 'assets/salad.jpg',
      prepTime: 30
    }


  ]

  getRecipes() {
    return this.recipes
  }

  getRecipeById(id: number) {
    return this.recipes.find(recipe => recipe.id === id)
  }
}
