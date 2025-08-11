import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calories-calculator',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './calories-calculator.component.html',
  styleUrl: './calories-calculator.component.css'
})
export class CaloriesCalculatorComponent {
  gender: 'male' | 'female' = 'male';
  age: number | null = null;
  height: number | null = null;
  weight: number | null = null;
  activity: number = 1.2;
  calorieResult: number = 0;
  proteinResult: number = 0;
  carbResult: number = 0;
  fatResult: number = 0;
  showResult: boolean = false;

  selectGender(gender: 'male' | 'female') {
    this.gender = gender;
  }

  calculateCalories() {
    if (
      this.age == null ||
      this.height == null ||
      this.weight == null ||
      !this.activity
    ) {
      this.showResult = false;
      return;
    }
    let bmr: number;
    if (this.gender === 'male') {
      bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
    } else {
      bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;
    }
    this.calorieResult = Math.round(bmr * this.activity);

    // Calculs standards (exemple : 20% protéines, 50% glucides, 30% lipides)
    const calories = this.calorieResult;
    this.proteinResult = Math.round((calories * 0.20) / 4); // 4 kcal/g pour protéines
    this.carbResult = Math.round((calories * 0.50) / 4);    // 4 kcal/g pour glucides
    this.fatResult = Math.round((calories * 0.30) / 9);     // 9 kcal/g pour lipides

    this.showResult = true;

  }

}
