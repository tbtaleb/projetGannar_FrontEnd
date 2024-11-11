import { Component, Input, OnInit } from '@angular/core';
import { JobOfferService } from '../../../services/job-offer.service';
import { ApplicationsService } from '../../../services/applications.service';
import { CommonModule } from '@angular/common';

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
  applicationScores: Map<number, number> = new Map<number, number>();

  constructor(
    private jobOfferService: JobOfferService,
    public applicationService: ApplicationsService
  ) {}

  ngOnInit(): void {
    this.getJobOfferById(this.jobOfferId);
    this.getApplicantsByJobOfferId(this.jobOfferId);
  }

  getApplicantsByJobOfferId(jobOfferId: number): void {
    this.jobOfferService
      .getAllApplicantsByJobOfferId(jobOfferId)
      .subscribe((data) => {
        this.jobApplicants = data;
        console.log(this.jobApplicants);
        this.jobApplicants.forEach((applicant) => {
          this.getApplicationScore(applicant.id);
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
            this.sortApplicantsByScore();
          }
        },
        (error) => {
          console.error('Error fetching application score:', error);
        }
      );
  }

  sortApplicantsByScore(): void {
    this.jobApplicants.sort((a, b) => {
      const scoreA = this.applicationScores.get(a.id) || 0;
      const scoreB = this.applicationScores.get(b.id) || 0;
      return scoreB - scoreA;
    });
  }

  getJobOfferById(jobOfferId: number): void {
    this.jobOfferService.getJobOfferById(jobOfferId).subscribe((data) => {
      this.jobOffer = data;
      console.log(this.jobOffer);
    });
  }
}
