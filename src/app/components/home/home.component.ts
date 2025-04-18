// src/app/components/home/home.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  difficulty = 'easy';
  questionCount = '10';

  constructor(private router: Router) {}

  startQuiz() {
    this.router.navigate(['/quiz'], {
      queryParams: { difficulty: this.difficulty, amount: this.questionCount },
    });
  }
}
