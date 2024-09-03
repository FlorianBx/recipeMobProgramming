import { Component } from '@angular/core';
import{RecipeService} from '../../recipe.service';
import { Recipe } from '../../models/recipe.model';
import { FormGroup,FormControl,ReactiveFormsModule,Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addrecipe',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './addrecipe.component.html',
  styleUrl: './addrecipe.component.css'
})
export class AddrecipeComponent {
  recipe: Recipe |undefined;
  addrecipeForm = new FormGroup ({
    name: new FormControl(''),
    ingredients: new FormControl(''),
    description: new FormControl(''),
    imagePath: new FormControl(''),
    prepTime: new FormControl(15),

   })


   constructor(
    private recipeService: RecipeService,
    private router: Router
  ) {}



submitForm() {
  const recipe: Recipe={
    name: this.addrecipeForm.value.name as string,
    ingredients: this.addrecipeForm.value.ingredients as string,
    description: this.addrecipeForm.value.description as string,
    imagePath: this.addrecipeForm.value.imagePath as string,
    prepTime: this.addrecipeForm.value.prepTime as number,
  }
 this.recipeService.addrecipe(recipe);


}


}

