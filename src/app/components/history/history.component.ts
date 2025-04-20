// src/app/components/history/history.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { StorageService } from '../../services/storage.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, NavbarComponent ,FooterComponent],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  historyData: { date: string; score: number }[] = [];

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.loadHistory();
  }

  loadHistory() {
    this.historyData = this.storageService.getHistory();
  }

  clearHistory() {
    this.storageService.clearHistory();
    this.historyData = [];
  }
}
