import { Routes } from '@angular/router';
import { AppNotificationsComponent } from './components/RecruiterNotificationComp/app-notifications/app-notifications.component';
import { CandidateInfoComponent } from './components/RecruiterNotificationComp/candidate-info/candidate-info.component';
import { MatchesComponentComponent } from './components/matches_component/matches_component.component';
import { RecommendedCandidatesComponent } from './components/recommendedCandidatesPage/recommended-candidates/recommended-candidates.component';
import { JobDetailComponent } from './components/AllJobs/job-detail/job-detail.component';
import { AllJobsComponent } from './components/AllJobs/all-jobs/all-jobs.component';
import { NewJobFormComponent } from './components/new-job-form/new-job-form.component';
import { AccueilComponent } from './components/landing page/accueil/accueil.component';
import { LoginCompComponent } from './components/AuthComponents/login-comp/login-comp.component';
import { SignUpCompComponent } from './components/AuthComponents/sign-up-comp/sign-up-comp.component';
import { HomeComponent } from './components/landing page/home/home.component';
import { AllExpiredJobsComponent } from './components/expiredJobs/all-expired-jobs/all-expired-jobs.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './services/guard/auth.guard';
import { MyJobOfferListComponent } from './components/Recruiter/my-job-offer-list/my-job-offer-list.component';
import { AppliedCandidatesrListComponent } from './components/Recruiter/applied-candidatesr-list/applied-candidatesr-list.component';
import { ApplicationsListComponent } from './components/Candidate/applications-list/applications-list.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: AccueilComponent },
      { path: 'notifications', component: AppNotificationsComponent },
      { path: 'candidate-detail', component: CandidateInfoComponent },
      {
        path: 'matches',
        component: MatchesComponentComponent,
        canActivate: [AuthGuard],
      },
      { path: 'recommendation', component: RecommendedCandidatesComponent },
      { path: 'uploadCV', component: UserProfileComponent },
      { path: 'jobs', component: AllJobsComponent },
      { path: 'candidateApplication', component: ApplicationsListComponent },
      { path: 'jobDetails/:id', component: JobDetailComponent },
      { path: 'recruiterJobOfferList', component: MyJobOfferListComponent },
      { path: 'appliedCandidatesList', component: AppliedCandidatesrListComponent },
      {
        path: 'newJob',
        component: NewJobFormComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'editJob/:id',
        component: NewJobFormComponent,
        canActivate: [AuthGuard],
      },
      { path: 'expired/:id', component: AllExpiredJobsComponent },
    ],
  },
  { path: 'signup', component: SignUpCompComponent },
  { path: 'login', component: LoginCompComponent },
  { path: '**', redirectTo: '' },
  // Redirect default route
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
