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
      image:
        'https://www.pngarts.com/files/5/Sports-Activities-PNG-Image-Transparent-Background.png',
    },
    {
      id: '17',
      name: 'Chimie',
      questionCount: 30,
      image:
        'https://thumbs.dreamstime.com/b/illustration-du-mod%C3%A8le-vectoriel-de-logo-chimie-261394613.jpg',
    },
    {
      id: '19',
      name: 'Mathématiques',
      questionCount: 95,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS45dU-Bi9dEu0SWBfhWBZJX40fwCzM1dCjMWfy-zajfe_vXoMW41MO7nkCbHX1OQPCTVk&usqp=CAU',
    },
    {
      id: '23',
      name: 'Histoire',
      questionCount: 121,
      image:
        'https://images.seeklogo.com/logo-png/22/2/the-history-channel-logo-png_seeklogo-222414.png',
    },
    {
      id: '27',
      name: 'Biologie',
      questionCount: 50,
      image:
        'https://img.freepik.com/vecteurs-libre/objets-laboratoire-scientifique_23-2148488312.jpg?semt=ais_hybrid&w=740',
    },
    {
      id: '22',
      name: 'Géographie',
      questionCount: 80,
      image:
        'https://i.pinimg.com/236x/e1/eb/68/e1eb685cc88e668ea15ea46fca468fdc.jpg',
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
