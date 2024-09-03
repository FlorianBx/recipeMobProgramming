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
  console.log(this.addrecipeForm.value);


}


}

