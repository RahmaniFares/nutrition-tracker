import { Aliment } from "./aliment";

export class Ingredient {
  id !: number;
  aliment!: Aliment;
  servingsize!: number; // e.g., 2 for 2 servings
  servingUnit!: string;
  totalCalories?: number; // e.g., 'cups', 'grams', etc.
}
