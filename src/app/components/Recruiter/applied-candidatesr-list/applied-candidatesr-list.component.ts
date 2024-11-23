import { Component } from '@angular/core';
import { Candidate } from '../../../classes/candidate';
import { RecruiterService } from '../../../services/recruiter.service';
import { AuthService } from '../../../services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { JobOfferService } from '../../../services/job-offer.service';

@Component({
  selector: 'app-applied-candidatesr-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './applied-candidatesr-list.component.html',
  styleUrl: './applied-candidatesr-list.component.css',
})
export class AppliedCandidatesrListComponent {
  jobOffersWithCandidates: any[] = [];
  jobOffer: any;
  constructor(
    private recruiterService: RecruiterService,
    private authService: AuthService,
    private jobOfferService: JobOfferService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadJobOffersWithCandidates();
  }
  DisplayCV(candidateId: number) {
    this.router.navigate(['/displayCV', candidateId]);
  }
  loadJobOffersWithCandidates(): void {
    const recruiter = this.authService.getUser();
    if (recruiter) {
      this.recruiterService.getCandidatesByRecruiterId(recruiter.id).subscribe(
        (data) => {
          this.jobOffersWithCandidates = data;
          console.log(this.jobOffersWithCandidates);
        },
        (error) => {
          console.error('Error fetching job offers with candidates:', error);
        }
      );
    } else {
      console.error('No recruiter found');
    }
  }

  deleteApplication(candidateId: number, jobOfferId: number): void {
    this.jobOfferService.deleteApplication(candidateId, jobOfferId).subscribe(
      () => {
        // Remove the deleted application from the list
        this.jobOffersWithCandidates = this.jobOffersWithCandidates.map(
          (jobOfferWithCandidates) => {
            jobOfferWithCandidates.candidates =
              jobOfferWithCandidates.candidates.filter(
                (candidate: Candidate) => candidate.id !== candidateId
              );
            return jobOfferWithCandidates;
          }
        );
      },
      (error) => {
        console.error('Error deleting application:', error);
      }
    );
  }
}
