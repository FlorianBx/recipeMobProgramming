import { Component } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { RouterLink } from '@angular/router';
import { Recipe } from '../../models/recipe.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  recipe: Recipe | undefined;

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    const recipeId = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.recipe = this.recipeService.getRecipeById(recipeId);
    console.log(this.recipe);
  }


}
