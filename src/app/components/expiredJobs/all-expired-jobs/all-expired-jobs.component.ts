import { Component } from '@angular/core';
import { ExpJobDivComponent } from "../exp-job-div/exp-job-div.component";

@Component({
  selector: 'app-all-expired-jobs',
  standalone: true,
  imports: [ExpJobDivComponent],
  templateUrl: './all-expired-jobs.component.html',
  styleUrl: './all-expired-jobs.component.css'
})
export class AllExpiredJobsComponent {

}
