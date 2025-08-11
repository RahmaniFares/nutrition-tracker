import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
    foods = [
    {
      name: 'Couscous',
      image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80',
      kcal: 350,
      protein: 12,
      description: 'Plat traditionnel à base de semoule, légumes et viande.'
    },
    {
      name: 'Lablabi',
      image: 'https://images.unsplash.com/photo-1601050690117-64feb1999c5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      kcal: 280,
      protein: 15,
      description: 'Soupe de pois chiches typiquement tunisienne, riche en fibres.'
    },
    {
      name: 'Brik',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1371&q=80',
      kcal: 220,
      protein: 8,
      description: 'Feuille de brick croustillante garnie d\'œuf, thon et persil.'
    },
    {
      name: 'Salade Mechouia',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      kcal: 150,
      protein: 5,
      description: 'Salade de légumes grillés, riche en vitamines et antioxydants.'
    }
  ];
}
