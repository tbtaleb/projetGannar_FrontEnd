import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JobOffer } from '../../../classes/job-offer';
import { JobOfferService } from '../../../services/job-offer.service';
import { ApplicationsService } from '../../../services/applications.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CandidateService } from '../../../services/candidate.service';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent implements OnInit{

  id:any
  jobOffer:any = {}
  candidate:any = {}
  constructor(private location: Location,private activatedRoute:ActivatedRoute,private jobService:JobOfferService,private applicationService:ApplicationsService,private candidateService:CandidateService) {}


  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.getJobById(this.id);
    this.loginUser();
  }

  
  getJobById(id:number){
    this.jobService.getJobOfferById(id).subscribe( data => {
      this.jobOffer = data;
      console.log(this.jobOffer);
    })
  }

  applyForJob(){
    this.applicationService.apply(this.candidate.id,this.jobOffer.Id).subscribe( data => {
      console.log(data)
    })
  }
  // Function to navigate back
  navigateBack() {
    this.location.back();
  }

  async loginUser(){
    try {
      const token = 'your-access-token';
      this.candidate = await this.candidateService.getCandidate();
      console.log('Candidate data:', this.candidate);
    } catch (error) {
      console.error('Error fetching candidate:', error);
    }
  }
}
