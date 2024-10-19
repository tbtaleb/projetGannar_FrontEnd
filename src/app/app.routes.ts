import { Routes } from '@angular/router';
import { AppNotificationsComponent } from './components/RecruiterNotificationComp/app-notifications/app-notifications.component';
import { CandidateInfoComponent } from './components/RecruiterNotificationComp/candidate-info/candidate-info.component';
import { MatchesComponentComponent } from './components/matches_component/matches_component.component';
import { RecommendedCandidatesComponent } from './components/recommendedCandidatesPage/recommended-candidates/recommended-candidates.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { JobDetailComponent } from './components/AllJobs/job-detail/job-detail.component';
import { AllJobsComponent } from './components/AllJobs/all-jobs/all-jobs.component';
import { NewJobFormComponent } from './components/new-job-form/new-job-form.component';

export const routes: Routes = [
  { path: 'notifications', component: AppNotificationsComponent },
  { path: 'candidate-detail', component: CandidateInfoComponent },
  { path: 'matches', component: MatchesComponentComponent },
  { path: 'recomandation', component: RecommendedCandidatesComponent },
  { path: 'profile', component: UserProfileComponent },
  
  // Parent route for Jobs with child routes
  { path: 'Jobs', component: AllJobsComponent,},
  { path: 'jobDetails', component: JobDetailComponent },

  { path: 'newJob' , component: NewJobFormComponent},

  // Redirect default route
  { path: '', redirectTo: '/Jobs', pathMatch: 'full' },

  // Wildcard route for 404
  { path: '**', redirectTo: '/matches' },
];
