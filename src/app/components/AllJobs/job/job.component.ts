import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { JobOffer } from '../../../classes/job-offer';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { JobDetailsComponent } from "../../recommendedCandidatesPage/job-details/job-details.component";
import { DividerModule } from 'primeng/divider';
import { JobDetailComponent } from "../job-detail/job-detail.component";
@Component({
  selector: 'app-job',
  standalone: true,
  imports: [TagModule, DialogModule, DividerModule, JobDetailComponent],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {
visible: boolean = false;
  constructor(private router: Router){}

  @Input() jobOffer!: JobOffer 

  goToJobDetails() {
    this.visible= !this.visible;
    // this.router.navigate([`jobDetails/${this.jobOffer.Id}`]);
  }

  
}
