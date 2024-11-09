import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppNotificationsComponent } from '../RecruiterNotificationComp/app-notifications/app-notifications.component';
import { Router } from '@angular/router';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BadgeModule } from 'primeng/badge';
import { BrowserModule } from '@angular/platform-browser';
import { NotificationsService } from '../../services/notifications.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone : true,
  imports: [CommonModule, RouterModule, OverlayPanelModule, BadgeModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'], // Corrected this line
})
export class NavbarComponent {
  notifications: any[] = [];
  nbNotifications: number = 0;

  constructor(
    private router: Router,
    private notificationsService: NotificationsService
  ) {}

  openNotificationDialog() {
    this.router.navigate(['notifications']);
  }

  ngOnInit(): void {
    this.loadNotifications();
  }

  loadNotifications(): void {
    const recruiterId = 1; // Replace with the actual recruiter ID
    this.notificationsService.getUnreadNotifications(recruiterId).subscribe(
      (data) => {
        this.notifications = data;
        this.nbNotifications = data.length;
      },
      (error) => {
        console.error('Failed to load notifications', error);
      }
    );
  }

  allRead(): void {
    const recruiterId = 1; // Replace with the actual recruiter ID
    this.notificationsService.markAllNotificationsAsRead(recruiterId).subscribe(
      (response) => {
        console.log('All notifications marked as read', response);
        this.loadNotifications(); // Reload notifications
      },
      (error) => {
        console.error('Failed to mark all notifications as read', error);
      }
    );
  }
}
