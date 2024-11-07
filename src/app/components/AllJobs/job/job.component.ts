import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { JobOffer } from '../../../classes/job-offer';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {
  constructor(private router: Router){}

  @Input() jobOffer!: JobOffer 

  goToJobDetails() {
    this.router.navigate([`jobDetails/${this.jobOffer.Id}`]);
  }

  
}
