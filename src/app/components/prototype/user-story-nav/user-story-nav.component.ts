import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-story-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-story-nav.component.html',
  styleUrl: './user-story-nav.component.css',
})
export class UserStoryNavComponent {
  constructor(private router: Router) {}
  navigateToMatches() {
    this.router.navigate(['/matches']);
  }

  navigateToRecommandations() {
    this.router.navigate(['/recomandation']);
  }

  navigateToNotifications() {
    this.router.navigate(['/notifications']);
  }
}
