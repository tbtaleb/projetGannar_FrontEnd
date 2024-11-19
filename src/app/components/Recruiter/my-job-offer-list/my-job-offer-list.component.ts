import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobOffer } from '../../../classes/job-offer';
import { AuthService } from '../../../services/auth/auth.service';
import { JobOfferService } from '../../../services/job-offer.service';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-my-job-offer-list',
  standalone: true,
  imports: [CommonModule, ToastModule],
  templateUrl: './my-job-offer-list.component.html',
  styleUrl: './my-job-offer-list.component.css',
  providers: [MessageService],
})
export class MyJobOfferListComponent {
  jobOffers: JobOffer[] = [];

  constructor(
    private jobOfferService: JobOfferService,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loadJobOffers();
  }

  loadJobOffers(): void {
    const recruiter = this.authService.getUser();
    if (recruiter) {
      this.jobOfferService.getJobOfferByRecruiterId(recruiter.id).subscribe(
        (data) => {
          this.jobOffers = data;
          console.log(this.jobOffers);
        },
        (error) => {
          console.error('Error fetching job offers:', error);
        }
      );
    } else {
      console.error('No recruiter found');
    }
  }

  deleteJobOffer(jobOfferId: number): void {
    this.jobOfferService.deleteJobOffer(jobOfferId).subscribe(
      (response) => {
        console.log('Job offer deleted successfully', response);
        this.messageService.add({
          severity: 'info',
          summary: 'Deleted',
          detail: 'Application deleted successfully',
        });
        this.loadJobOffers(); // Reload the job offers after deletion
      },
      (error) => {
        console.error('Error deleting job offer:', error);
      }
    );
  }

  editJobOffer(jobOfferId: number): void {
    this.router.navigate(['/editJob', jobOfferId]);
  }

  addJobOffer(): void {
    this.router.navigate(['/newJob']);
  }
}
