import { Routes } from '@angular/router';
import { AppNotificationsComponent } from './components/RecruiterNotificationComp/app-notifications/app-notifications.component';
import { CandidateInfoComponent } from './components/RecruiterNotificationComp/candidate-info/candidate-info.component';
import { MatchesComponentComponent } from './components/matches_component/matches_component.component';
import { RecommendedCandidatesComponent } from './components/recommendedCandidatesPage/recommended-candidates/recommended-candidates.component';
import { UserStoryNavComponent } from './components/prototype/user-story-nav/user-story-nav.component';

export const routes: Routes = [
  { path: 'notifications', component: AppNotificationsComponent },
  { path: 'candidate-detail', component: CandidateInfoComponent },
  { path: 'matches', component: MatchesComponentComponent },
  { path: 'recomandation', component: RecommendedCandidatesComponent },
 
  // Add other routes as needed
  { path: '', redirectTo: '/matches', pathMatch: 'full' },
  { path: '**', redirectTo: '/matches' },
];
