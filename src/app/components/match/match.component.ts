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
  styleUrl: './match.component.css'
})
export class MatchComponent implements OnInit{

  constructor(private jobOfferService:JobOfferService,private applicationService:ApplicationsService,private candidateService:CandidateService,private authService:AuthService){}

  job:any
  candidate:any = {}
  ApplicationExists=false
  ApplicationCreated=false
  candidateid!: number;
  ngOnInit(): void {
    this.candidateid = this.authService.getUser().id;
        this.jobOfferService.getJobOfferById(Number(this.jobMatch.jobOffer)).subscribe( data => {
          this.job = data
          
        })
     this.candidateid=this.authService.getUser().id;   
    // this.loginUser();
  }

  applyForJob(){
    this.applicationService.apply(this.candidateid, this.job.Id).subscribe(
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

  @Input() jobMatch!:Match

  // async loginUser(){
  //   try {
  //     const token = 'your-access-token';
  //     this.candidate = await this.candidateService.getCandidate();
  //     this.jobOfferService.getJobOfferById(Number(this.jobMatch.jobOffer)).subscribe( data => {
  //       this.job = data
  //       console.log(this.job)
  //     })
  //     console.log('Candidate data:', this.candidate);
  //   } catch (error) {
  //     console.error('Error fetching candidate:', error);
  //   }
  // }

}
