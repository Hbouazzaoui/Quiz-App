// src/app/services/storage.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly HISTORY_KEY = 'quiz_history';

  // Get history from localStorage
  getHistory(): { date: string; score: number }[] {
    const history = localStorage.getItem(this.HISTORY_KEY);
    return history ? JSON.parse(history) : [];
  }

  // Save history to localStorage
  saveHistory(history: { date: string; score: number }[]) {
    localStorage.setItem(this.HISTORY_KEY, JSON.stringify(history));
  }

  // Add a new history entry
  addHistoryEntry(score: number) {
    const history = this.getHistory();
    const date = new Date().toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    history.push({ date, score });
    this.saveHistory(history);
  }

  // Clear history
  clearHistory() {
    localStorage.removeItem(this.HISTORY_KEY);
  }
}
