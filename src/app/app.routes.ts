import { Routes } from '@angular/router';
import { AppNotificationsComponent } from './components/RecruiterNotificationComp/app-notifications/app-notifications.component';
import { CandidateInfoComponent } from './components/RecruiterNotificationComp/candidate-info/candidate-info.component';
import { MatchesComponentComponent } from './components/matches_component/matches_component.component';
import { RecommendedCandidatesComponent } from './components/recommendedCandidatesPage/recommended-candidates/recommended-candidates.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { JobDetailComponent } from './components/AllJobs/job-detail/job-detail.component';
import { AllJobsComponent } from './components/AllJobs/all-jobs/all-jobs.component';
import { NewJobFormComponent } from './components/new-job-form/new-job-form.component';
import { AccueilComponent } from './components/landing page/accueil/accueil.component';
import { AllExpiredJobsComponent } from './components/expiredJobs/all-expired-jobs/all-expired-jobs.component';
import { ExpJobDetailsComponent } from './components/expiredJobs/exp-job-details/exp-job-details.component';

export const routes: Routes = [
  { path: 'notifications', component: AppNotificationsComponent }, //NOT NEEDED SINCE THE CANDIDATE IS GONNA BE LOGGED IN WHILE THE SYSTEM MATCHES THEM WITH JOBS, THE CANDIDATE INITIATES THE MATCHING PROCESS AND AWAITS THE RESULTS!
  { path: 'candidate-detail', component: CandidateInfoComponent },
  { path: 'matches', component: MatchesComponentComponent }, //DONE
  { path: 'recommendation', component: RecommendedCandidatesComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'home', component: AccueilComponent },

  // Parent route for Jobs with child routes

  { path: 'jobs', component: AllJobsComponent }, //DONE
  { path: 'jobDetails/:id', component: JobDetailComponent }, //DONE
  { path: 'jobs-history/:id', component: AllExpiredJobsComponent },

  { path: 'newJob', component: NewJobFormComponent },

  // Redirect default route

  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Wildcard route for 404

  { path: '**', redirectTo: '/home' },
];
