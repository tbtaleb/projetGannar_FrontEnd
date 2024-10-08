import { Component } from '@angular/core';
import { JobComponent } from "../job/job.component";

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [JobComponent],
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.css'
})
export class JobsListComponent {

}
