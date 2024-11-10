import { Component, Input, OnInit } from '@angular/core';
import { JobOfferService } from '../../../services/job-offer.service';
import { ApplicationsService } from '../../../services/applications.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth/auth.service';
@Component({
  selector: 'app-exp-job-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exp-job-details.component.html',
  styleUrl: './exp-job-details.component.css',
})
export class ExpJobDetailsComponent implements OnInit {
  @Input() jobOfferId!: number;
  jobOffer: any = {};
  jobApplicants: any[] = [];
  applicationScores: Map<number, number> = new Map();

  constructor(
    private jobOfferService: JobOfferService,
    public applicationService: ApplicationsService
  ) {}

  ngOnInit(): void {
    this.getJobOfferById(this.jobOfferId);
    this.getApplicantsByJobOfferId(this.jobOfferId);
  }

  getApplicantsByJobOfferId(jobOfferId: number) {
    this.jobOfferService
      .getAllApplicantsByJobOfferId(jobOfferId)
      .subscribe((data) => {
        this.jobApplicants = data;
        

        // Fetch score for each applicant
        this.jobApplicants.forEach((candidate) => {
          this.getApplicationScore(candidate.id);
        });
      });
  }

  getApplicationScore(candidateId: number): void {
    this.applicationService
      .getApplicationByCandidateIdAndJobOfferId(candidateId, this.jobOfferId)
      .subscribe(
        (application: any) => {
           if (application) {
              console.log('Application:', application);
              
             const score = application.candidate_score;
             console.log('Application score:', score);
             
             this.applicationScores.set(candidateId, score);
           }
        },
        (error) => {
          console.error('Error fetching application score:', error);
        }
      );
  }

  getJobOfferById(jobOfferId: number) {
    this.jobOfferService.getJobOfferById(jobOfferId).subscribe((data) => {
      this.jobOffer = data;
      
    });
  }
}
