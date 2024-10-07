import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecommendedCandidatesComponent } from './components/recommendedCandidatesPage/recommended-candidates/recommended-candidates.component';
import { JobDetailsComponent } from './components/recommendedCandidatesPage/job-details/job-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RecommendedCandidatesComponent,JobDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEndGannar2';
}
