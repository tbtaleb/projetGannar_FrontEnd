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
        console.log(this.jobOffer);
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

  applyForJob(): void {
    if (!this.candidate || !this.jobOffer) {
      console.error('Candidate or Job Offer not found');
      return;
    }

    this.applicationService
      .apply(this.candidate.id, this.jobOffer.Id)
      .subscribe(
        (data) => {
          console.log(data);
          this.ApplicationCreated = true;
        },
        (error) => {
          console.error('An error occurred:', error);
          this.ApplicationExists = true;
        }
      );
  }

  // Function to navigate back
  navigateBack(): void {
    this.location.back();
  }
}
