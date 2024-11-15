import { Component, Input, OnInit } from '@angular/core';
import { Match } from '../../classes/match';
import { JobOfferService } from '../../services/job-offer.service';
import { ApplicationsService } from '../../services/applications.service';
import { CandidateService } from '../../services/candidate.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-match',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './match.component.html',
  styleUrl: './match.component.css',
})
export class MatchComponent implements OnInit {
  constructor(
    private jobOfferService: JobOfferService,
    private applicationService: ApplicationsService,
    private candidateService: CandidateService,
    private authService: AuthService
  ) {}

  job: any;
  candidate: any = {};
  ApplicationExists = false;
  ApplicationCreated = false;
  candidateid!: number;

  @Input() jobMatch!: Match;

  ngOnInit(): void {
    this.candidateid = this.authService.getUser().id;
    this.jobOfferService
      .getJobOfferById(Number(this.jobMatch.jobOffer))
      .subscribe((data) => {
        this.job = data;
        this.checkIfApplied();
      });
  }

  checkIfApplied(): void {
    if (!this.candidateid || !this.job) {
      return;
    }

    this.applicationService
      .getApplicationByCandidateIdAndJobOfferId(this.candidateid, this.job.Id)
      .subscribe(
        (data) => {
          if (data) {
            this.ApplicationExists = true;
         
          }
        },
        (error) => {
          console.error('An error occurred:', error);
        }
      );
  }

  applyForJob(): void {
    if (!this.candidateid || !this.job) {
      console.error('Candidate or Job Offer not found');
      return;
    }

    this.applicationService.apply(this.job.Id, this.candidateid).subscribe(
      (data) => {
        this.ApplicationCreated = true;

        this.ApplicationExists = true;
      },
      (error) => {
        console.error('An error occurred:', error);
        this.ApplicationExists = false;
      }
    );
  }
}
