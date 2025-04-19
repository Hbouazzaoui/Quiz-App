// src/app/components/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent], // Add CommonModule to imports
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  difficulty = 'easy';
  questionCount = '10';
  selectedCategory: string | null = null;
  categories = [
    {
      id: '21',
      name: 'Sports',
      questionCount: 95,
      image: 'assets/images/sports.png',
    },
    {
      id: '17',
      name: 'Chimie',
      questionCount: 30,
      image: 'assets/images/chemistry.png',
    },
    {
      id: '19',
      name: 'Mathématiques',
      questionCount: 95,
      image: 'assets/images/math.png',
    },
    {
      id: '23',
      name: 'Histoire',
      questionCount: 121,
      image: 'assets/images/history.png',
    },
    {
      id: '27',
      name: 'Biologie',
      questionCount: 50,
      image: 'assets/images/biological.png',
    },
    {
      id: '22',
      name: 'Géographie',
      questionCount: 80,
      image: 'assets/images/geography.png',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  selectCategory(categoryId: string) {
    this.selectedCategory = categoryId;
  }

  startQuiz() {
    this.router.navigate(['/quiz'], {
      queryParams: {
        category: this.selectedCategory,
        difficulty: this.difficulty,
        amount: this.questionCount,
      },
    });
  }
}
