import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

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
  

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}