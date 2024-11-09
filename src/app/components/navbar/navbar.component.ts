import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppNotificationsComponent } from '../RecruiterNotificationComp/app-notifications/app-notifications.component';
import { Router } from '@angular/router';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BadgeModule } from 'primeng/badge';
import { BrowserModule } from '@angular/platform-browser';
import { NotificationsService } from '../../services/notifications.service';
import { SidebarModule } from 'primeng/sidebar';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CandidateService } from '../../services/candidate.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    OverlayPanelModule,
    BadgeModule,
    SidebarModule,
    ButtonModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'], // Corrected this line
})
export class NavbarComponent {
  notifications: any[] = [];
  nbNotifications: number = 0;
  sidebarVisible: boolean = false;
  candidate:any = {}
  constructor(
    private router: Router,
    private notificationsService: NotificationsService,
    private candidateService:CandidateService
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

  markAsRead(notificationId: number): void {
    this.notificationsService.markNotificationAsRead(notificationId).subscribe(
      (response) => {
        console.log('Notification marked as read', response);

        this.loadNotifications(); // Reload notifications
      },
      (error) => {
        console.error('Failed to mark notification as read', error);
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
  async loginUser(){
    try {
      const token = 'your-access-token';
      this.candidate = await this.candidateService.getCandidate();
      console.log('Candidate data:', this.candidate);
    } catch (error) {
      console.error('Error fetching candidate:', error);
    }
  }
}
