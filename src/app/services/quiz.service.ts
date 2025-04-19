// src/app/services/quiz.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private apiUrl = 'https://opentdb.com/api.php?type=multiple';
  private categoryUrl = 'https://opentdb.com/api_category.php';

  constructor(private http: HttpClient) {}

  getQuestions(
    category: string,
    difficulty: string,
    amount: string
  ): Observable<any> {
    let url = `${this.apiUrl}&amount=${amount}`;
    if (category) url += `&category=${category}`;
    if (difficulty) url += `&difficulty=${difficulty}`;
    return this.http.get(url);
  }

  getCategories(): Observable<any> {
    return this.http.get(this.categoryUrl);
  }
}
