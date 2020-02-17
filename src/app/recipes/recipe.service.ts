import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe []>();

  private recipes: Recipe[] = [
    new Recipe('Urmasice',
      'Samo slatko',
      'https://i.ytimg.com/vi/8jC4YmrO7SI/maxresdefault.jpg',
       [
         new Ingredient('Sugar', 1000, ),
         new Ingredient('Eggs', 4)
       ]),
    new Recipe('Tulumbe',
      'Secer',
      'https://recepttag.com/wp-content/uploads/2017/10/tulumbe.jpg',
       [
         new Ingredient('Secera', 9000),
         new Ingredient('Eggs', 4)
       ]) 
  ];

  constructor(private slService: ShoppingListService) {}
  
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  } 

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1); 
    this.recipesChanged.next(this.recipes.slice());  
  }
}