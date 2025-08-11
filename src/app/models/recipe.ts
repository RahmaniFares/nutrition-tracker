import { Ingredient } from "./ingredient";

export class Recipe {
  id: number = 0;
  name: string = '';
  description: string = '';
  ingredients: Ingredient[] = [];
  instructions: string[] = [''];
  preparationTime: number = 0; // in minutes
  cookingTime: number = 0; // in minutes
  totalTime: number = 0;
  totalcalories: number = 0; // in minutes
}

