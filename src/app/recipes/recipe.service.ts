import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

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

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }


}