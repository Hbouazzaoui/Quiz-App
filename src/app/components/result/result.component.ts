import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-result',
  standalone: true,
  imports: [NavbarComponent ,FooterComponent],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {
  score = 0;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      this.score = params['score'] || 0;
    });
  }

  replay() {
    this.router.navigate(['/']);
  }
  goHome() {
    this.router.navigate(['/']);
  }
}

