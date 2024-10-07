import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNotificationsComponent } from "./components/RecruiterNotificationComp/app-notifications/app-notifications.component";
import { CandidateInfoComponent } from "./components/RecruiterNotificationComp/candidate-info/candidate-info.component";
import { RecommendedCandidatesComponent } from './components/recommendedCandidatesPage/recommended-candidates/recommended-candidates.component';
import { JobDetailsComponent } from './components/recommendedCandidatesPage/job-details/job-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNotificationsComponent, CandidateInfoComponent,RecommendedCandidatesComponent,JobDetailsComponent],
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
