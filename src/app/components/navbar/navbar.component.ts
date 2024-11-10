import { Component, OnInit } from '@angular/core';
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
import { AuthService } from '../../services/auth/auth.service';
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
export class NavbarComponent implements OnInit {
  notifications: any[] = [];
  nbNotifications: number = 0;
  sidebarVisible: boolean = false;
  candidateId!:number;
  constructor(
    public authService: AuthService,
    private notificationsService: NotificationsService
  ) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.loadNotifications();
    }
    this.candidateId = this.authService.getUser().id
    console.log(this.candidateId)
  }

  loadNotifications(): void {
    const recruiterId = this.authService.getUser().id // Replace with the actual recruiter ID
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
  //isCandidate(){
  //  return this.user.role=='candidate'
  //}
  //isRecruiter(){
  //  return this.user.role=='recruiter'
  //}
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

  logout(): void {
    this.authService.logout();
  }
}
