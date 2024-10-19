import { Component } from '@angular/core';
import { JobsListComponent } from "../jobs-list/jobs-list.component";

@Component({
  selector: 'app-all-jobs',
  standalone: true,
  imports: [JobsListComponent],
  templateUrl: './all-jobs.component.html',
  styleUrl: './all-jobs.component.css'
})
export class AllJobsComponent {

}
