import { Component } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { Recipe } from '../../models/recipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  recipes: Recipe[] = [];

  constructor(public recipeService: RecipeService, public router: Router) {


  }



  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();

  }

  goToDetail(id: number) {
    this.router.navigate(['/recipes', id]);
  }
}
