import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { RecipeService } from './recipe.service';
import { Recipe } from './models/recipe.model';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent, DetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipeMob';
  recipes: Recipe[] = [];

constructor(public recipeService: RecipeService) {


}

ngOnInit() {
  this.recipes = this.recipeService.getRecipes();
  this.recipeService.getRecipes();
  console.log(this.recipeService.getRecipes());

}

}

