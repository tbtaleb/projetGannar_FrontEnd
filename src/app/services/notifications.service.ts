import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  private notificationsURL = `${environment.apiUrl}/notifications`;

  constructor(private httpClient: HttpClient) {}

  getUnreadNotifications(recruiterId: number): Observable<any[]> {
    return this.httpClient.get<any[]>(
      `${this.notificationsURL}/unread/${recruiterId}/`
    );
  }

  markNotificationAsRead(notificationId: number): Observable<any> {
    return this.httpClient.post<any>(
      `${this.notificationsURL}/mark-as-read/${notificationId}/`,
      {}
    );
  }

  markAllNotificationsAsRead(recruiterId: number): Observable<any> {
    return this.httpClient.post<any>(
      `${this.notificationsURL}/mark-all-as-read/${recruiterId}/`,
      {}
    );
  }
}
