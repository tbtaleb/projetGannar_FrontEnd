import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobOfferService } from '../../../services/job-offer.service';
import { ApplicationsService } from '../../../services/applications.service';
import { AuthService } from '../../../services/auth/auth.service';


@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css',
})
export class JobDetailComponent implements OnInit {
  id: any;
  jobOffer: any = {};
  candidate: any = {};
  ApplicationExists = false;
  ApplicationCreated = false;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private jobService: JobOfferService,
    private applicationService: ApplicationsService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getJobById(this.id);
    this.loadCurrentUser();
  }

  getJobById(id: number): void {
    this.jobService.getJobOfferById(id).subscribe(
      (data) => {
        this.jobOffer = data;
        this.checkIfApplied();
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
  }

  loadCurrentUser(): void {
    this.candidate = this.authService.getUser();
    if (this.candidate) {
      console.log('Candidate data:', this.candidate);
    } else {
      console.error('No candidate found');
    }
  }

  checkIfApplied(): void {
    if (!this.candidate || !this.jobOffer) {
      return;
    }

    this.applicationService
      .getApplicationByCandidateIdAndJobOfferId(
        this.candidate.id,
        this.jobOffer.Id
      )
      .subscribe(
        (data) => {
          if (data) {
            this.ApplicationExists = true;
            this.errorMessage = 'You already applied for this job.';
          }
        },
        (error) => {
          console.error('An error occurred:', error);
        }
      );
  }

  applyForJob(): void {
    if (!this.candidate || !this.jobOffer) {
      console.error('Candidate or Job Offer not found');
      return;
    }

    this.applicationService
      .apply(this.jobOffer.Id, this.candidate.id)
      .subscribe(
        (data) => {
          this.ApplicationCreated = true;
          this.successMessage = 'You have Applied for this Job!';
          this.errorMessage = null;
        },
        (error) => {
          console.error('An error occurred:', error);
          this.ApplicationExists = true;
          this.errorMessage = 'An error occurred while applying for the job.';
        }
      );
  }

  // Function to navigate back
  navigateBack(): void {
    this.location.back();
  }
}
