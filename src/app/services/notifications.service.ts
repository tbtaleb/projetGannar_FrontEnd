import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  private notificationsURL = 'http://127.0.0.1:8000/api/notifications';

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
