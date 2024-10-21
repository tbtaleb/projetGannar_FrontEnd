import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatchesComponentComponent } from './components/matches_component/matches_component.component';
import { AppNotificationsComponent } from "./components/RecruiterNotificationComp/app-notifications/app-notifications.component";
import { CandidateInfoComponent } from "./components/RecruiterNotificationComp/candidate-info/candidate-info.component";
import { RecommendedCandidatesComponent } from './components/recommendedCandidatesPage/recommended-candidates/recommended-candidates.component';
import { JobDetailsComponent } from './components/recommendedCandidatesPage/job-details/job-details.component';
import { UserStoryNavComponent } from "./components/prototype/user-story-nav/user-story-nav.component";
import { JobComponent } from "./components/AllJobs/job/job.component";
import { JobsListComponent } from "./components/AllJobs/jobs-list/jobs-list.component";
import { AllJobsComponent } from "./components/AllJobs/all-jobs/all-jobs.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    AppNotificationsComponent, 
    CandidateInfoComponent, 
    RecommendedCandidatesComponent, 
    JobDetailsComponent, 
    MatchesComponentComponent, 
    UserStoryNavComponent, 
    JobComponent, 
    JobsListComponent, 
    AllJobsComponent
  ],
  providers: [
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'FrontEndGannar2';

  selectedCandidate: any;

  onCandidateSelected(candidate: any) {
    this.selectedCandidate = candidate;
  }
}
