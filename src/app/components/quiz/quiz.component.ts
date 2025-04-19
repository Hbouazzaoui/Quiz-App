// src/app/components/quiz/quiz.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuizService } from '../../services/quiz.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit, OnDestroy {
  questions: any[] = [];
  currentQuestionIndex = 0;
  score = 0;
  selectedAnswer: string | null = null;
  timer = 30;
  timerInterval: any;
  expectedAmount = 10; // Store the requested amount

  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const category = params['category'] || '';
      const difficulty = params['difficulty'] || 'easy';
      const amount = parseInt(params['amount'] || '10', 10);
      this.expectedAmount = amount; // Store the requested amount
      console.log('Amount:', amount);
      this.quizService
        .getQuestions(category, difficulty, amount.toString())
        .subscribe((data) => {
          console.log('API Response:', data);
          this.questions = data.results.map((q: any) => ({
            ...q,
            answers: [...q.incorrect_answers, q.correct_answer].sort(
              () => Math.random() - 0.5
            ),
          }));
          console.log('Number of Questions:', this.questions.length);
          this.startTimer();
        });
    });
  }

  startTimer() {
    this.timer = 30;
    this.timerInterval = setInterval(() => {
      this.timer--;
      if (this.timer <= 0) {
        this.submitAnswer();
      }
    }, 1000);
  }

  selectAnswer(answer: string) {
    this.selectedAnswer = answer;
  }

  submitAnswer() {
    clearInterval(this.timerInterval);
    if (
      this.selectedAnswer ===
      this.questions[this.currentQuestionIndex].correct_answer
    ) {
      this.score += 10;
    }
    this.currentQuestionIndex++;
    this.selectedAnswer = null;
    if (this.currentQuestionIndex >= this.questions.length) {
      this.router.navigate(['/result'], { queryParams: { score: this.score } });
    } else {
      this.startTimer();
    }
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval);
  }
}
