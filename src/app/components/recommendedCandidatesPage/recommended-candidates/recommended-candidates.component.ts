import { Component } from '@angular/core';
import { JobDetailsComponent } from '../job-details/job-details.component';
import { CandidatesListComponent } from '../candidates-list/candidates-list.component';

@Component({
  selector: 'app-recommended-candidates',
  standalone: true,
  imports: [JobDetailsComponent,CandidatesListComponent],
  templateUrl: './recommended-candidates.component.html',
  styleUrl: './recommended-candidates.component.css'
})
export class RecommendedCandidatesComponent {

}
