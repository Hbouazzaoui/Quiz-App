// src/app/components/leaderboard/leaderboard.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

// Define the type for leaderboard entries
interface LeaderboardEntry {
  name: string;
  score: string;
}

// Define the type for the leaderboard data
interface LeaderboardData {
  all: LeaderboardEntry[];
  week: LeaderboardEntry[];
  month: LeaderboardEntry[];
}

// Define the possible values for activeTab
type TabType = 'all' | 'week' | 'month';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent {
  activeTab: TabType = 'all';
  leaderboardData: LeaderboardData = {
    all: [
      { name: 'Smith Carol', score: '91,736' },
      { name: 'Stina Gunnarsdottir', score: '90,281' },
      { name: 'Benedikt Safiyulin', score: '88,463' },
      { name: 'Gabriel Soares', score: '85,287' },
      { name: 'Yahiro Ayuko', score: '84,009' },
      { name: 'Saami Al Amad', score: '83,292' },
    ],
    week: [
      { name: 'Alex Brown', score: '50,123' },
      { name: 'Emma Wilson', score: '48,987' },
      { name: 'Liam Davis', score: '45,654' },
      { name: 'Olivia Moore', score: '42,321' },
      { name: 'Noah Taylor', score: '40,789' },
      { name: 'Ava Anderson', score: '38,456' },
    ],
    month: [
      { name: 'James Smith', score: '70,456' },
      { name: 'Sophia Johnson', score: '68,123' },
      { name: 'Michael Brown', score: '65,789' },
      { name: 'Isabella Davis', score: '62,345' },
      { name: 'William Wilson', score: '60,012' },
      { name: 'Mia Taylor', score: '58,678' },
    ],
  };
}
