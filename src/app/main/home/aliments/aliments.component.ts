import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aliments',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './aliments.component.html',
  styleUrl: './aliments.component.css'
})
export class AlimentsComponent {
  view: 'grid' | 'list' = 'grid';
  selectedCategory = 'all';
  searchTerm = '';

  foods = [
    {
      id: 1,
      name: 'Salade tunisienne',
      image: 'https://images.unsplash.com/photo-1512621776951-5713831aecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      kcal: 250,
      description: 'Une délicieuse salade traditionnelle avec des légumes frais et des épices tunisiennes.',
      category: 'tunisien'
    },
    {
      id: 2,
      name: 'Couscous',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      kcal: 450,
      description: 'Le plat national tunisien, servi avec des légumes et de la viande.',
      category: 'tunisien'
    },
    {
      id: 3,
      name: 'Brik',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      kcal: 320,
      description: 'Feuilleté croustillant farci à l\'œuf et au thon, spécialité tunisienne.',
      category: 'tunisien'
    },
    {
      id: 4,
      name: 'Harissa',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      kcal: 50,
      description: 'Pâte de piment rouge, incontournable dans la cuisine tunisienne.',
      category: 'naturel'
    },
    {
      id: 5,
      name: 'Tajine tunisien',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      kcal: 380,
      description: 'Omelette cuite au four avec viande, légumes et fromage.',
      category: 'tunisien'
    },
    {
      id: 6,
      name: 'Lablabi',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      kcal: 300,
      description: 'Soupe de pois chiches typiquement tunisienne, parfaite pour l\'hiver.',
      category: 'tunisien'
    },
    {
      id: 7,
      name: 'Ojja',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      kcal: 270,
      description: 'Plat à base de tomates, poivrons, merguez et œufs.',
      category: 'tunisien'
    },
    {
      id: 8,
      name: 'Chakchouka',
      image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      kcal: 210,
      description: 'Mélange de légumes sautés, œufs et épices.',
      category: 'tunisien'
    },
    {
      id: 9,
      name: 'Poivrons grillés',
      image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      kcal: 90,
      description: 'Poivrons grillés à l\'huile d\'olive et ail.',
      category: 'naturel'
    },
    {
      id: 10,
      name: 'Makroud',
      image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      kcal: 400,
      description: 'Pâtisserie à base de semoule, dattes et miel.',
      category: 'industriel'
    },
    {
      id: 11,
      name: 'Pain Tabouna',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      kcal: 260,
      description: 'Pain traditionnel cuit dans un four en terre.',
      category: 'tunisien'
    },
    {
      id: 12,
      name: 'Bambalouni',
      image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      kcal: 350,
      description: 'Beignet tunisien sucré, frit et saupoudré de sucre.',
      category: 'industriel'
    },
    {
      id: 13,
      name: 'Mloukhia',
      image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      kcal: 320,
      description: 'Ragoût vert à base de poudre de corète et viande.',
      category: 'tunisien'
    },
    {
      id: 14,
      name: 'Kafteji',
      image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      kcal: 420,
      description: 'Mélange frit de légumes, œufs et foie.',
      category: 'tunisien'
    },
    {
      id: 15,
      name: 'Dattes Deglet Nour',
      image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      kcal: 280,
      description: 'Dattes tunisiennes sucrées, riches en fibres et minéraux.',
      category: 'naturel'
    }
  ];

  filteredFoods = this.foods;

  categories = [
    { id: 1, value: 'all', label: 'Tous les aliments' },
    { id: 2, value: 'tunisien', label: 'Tunisien' },
    { id: 3, value: 'industriel', label: 'Industriel' },
    { id: 4, value: 'naturel', label: 'Naturel' }
  ];

  page = 1;
  pageSize = 8;
  totalPages = 1;

  ngOnInit() {
    this.updatePagination();
  }

  onCategoryChange(event: any) {
    this.page = 1;
    this.filterFoods();
  }

  onSearchChange() {
    this.page = 1;
    this.filterFoods();
  }

  filterFoods() {
    let filtered = this.foods;
    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(food => food.category === this.selectedCategory);
    }
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.trim().toLowerCase();
      filtered = filtered.filter(food =>
        food.name.toLowerCase().includes(term) ||
        (food.description && food.description.toLowerCase().includes(term))
      );
    }
    this.filteredFoods = filtered;
    this.updatePagination();
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.filteredFoods.length / this.pageSize) || 1;
  }

  get pagedFoods() {
    const start = (this.page - 1) * this.pageSize;
    return this.filteredFoods.slice(start, start + this.pageSize);
  }

  goToPage(p: number) {
    if (p >= 1 && p <= this.totalPages) {
      this.page = p;
    }
  }

  prevPage() {
    if (this.page > 1) this.page--;
  }

  nextPage() {
    if (this.page < this.totalPages) this.page++;
  }
}
