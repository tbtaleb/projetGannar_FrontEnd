import { Routes } from '@angular/router';
import { AppNotificationsComponent } from './components/RecruiterNotificationComp/app-notifications/app-notifications.component';
import { CandidateInfoComponent } from './components/RecruiterNotificationComp/candidate-info/candidate-info.component';

export const routes: Routes = [
  { path: 'notifications', component: AppNotificationsComponent },
  { path: 'candidate-detail', component: CandidateInfoComponent },
  // Add other routes as needed
  { path: '', redirectTo: '/notifications', pathMatch: 'full' },
  { path: '**', redirectTo: '/notifications' },
];
