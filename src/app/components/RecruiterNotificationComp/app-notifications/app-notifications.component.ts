import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-notifications.component.html',
  styleUrl: './app-notifications.component.css',
})
export class AppNotificationsComponent {
  @Output() candidateSelected = new EventEmitter<any>();

  notifications = [
    {
      id: 1,
      name: 'Foulen Fouleni',
      skills: 'Lorem ipsum...',
      experiences: 'hedhi...',
    },
    {
      id: 2,
      name: 'John Doe',
      skills: 'Lorem ipsum...',
      experiences: 'Another experience...',
    },
    // Add more notifications as needed
  ];

  selectCandidate(notification: any) {
    this.candidateSelected.emit(notification);
  }
}
