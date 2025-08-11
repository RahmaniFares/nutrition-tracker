import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-aliment-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aliment-details.component.html',
  styleUrl: './aliment-details.component.css'
})
export class AlimentDetailsComponent implements OnInit {
  aliment = {
    name: 'Couscous',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80',
    kcal: 350,
    protein: 12,
    carbs: 60,
    fat: 5,
    fiber: 4,
    glycemicIndex: 65,
    vitamins: ['B1', 'B3', 'B6', 'E'],
    minerals: ['Fer', 'Magnésium', 'Zinc', 'Phosphore'],
    description: 'Plat traditionnel à base de semoule, légumes et viande.'
  };
   animatedValues = {
    kcal: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0
  };
    ngOnInit() {
    this.animateValue('kcal', this.aliment.kcal, 1500);
    this.animateValue('protein', this.aliment.protein, 1500);
    this.animateValue('carbs', this.aliment.carbs, 1500);
    this.animateValue('fat', this.aliment.fat, 1500);
    this.animateValue('fiber', this.aliment.fiber, 1500);
  }

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
  animateValue(key: keyof typeof this.animatedValues, endValue: number, duration: number) {
    let startValue = 0;
    const frameRate = 60;
    const increment = endValue / (duration / (1000 / frameRate));

    const interval = setInterval(() => {
      startValue += increment;
      if (startValue >= endValue) {
        startValue = endValue;
        clearInterval(interval);
      }
      this.animatedValues[key] = parseFloat(startValue.toFixed(1));
    }, 1000 / frameRate);
  }
}
