import { Component, OnInit } from '@angular/core';
import { UploadCvComponent } from "../upload-cv/upload-cv.component";
import { JobComponent } from "../../AllJobs/job/job.component";
import { JobOffer } from '../../../classes/job-offer';
import { JobOfferService } from '../../../services/job-offer.service';
import { RecruiterService } from '../../../services/recruiter.service';
import { CandidateService } from '../../../services/candidate.service';
import { Candidate } from '../../../classes/candidate';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [UploadCvComponent, JobComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit{

  jobOffers:JobOffer[] = []
  candidate:any = {}

  constructor(private jobOfferService:JobOfferService,private recruiterService:RecruiterService,private candidateService:CandidateService){}

  ngOnInit(): void {
    //this.getAllJobOffers();
    //this.getLoggedCandidate();
    this.loginUser();
    
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





  //getLoggedCandidate(){
  //  this.candidateService.getCandidate().subscribe(data => {
  //    console.log(data)
  //  })
  //}

  getAllJobOffers(){
    this.jobOfferService.getAllJobOffers().subscribe(data => {
      this.jobOffers = data
      console.log(this.jobOffers)
    })
  }
  

  scrollLeft() {
    const scrollContainer = document.getElementById('scrollContainer');
    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  }

  scrollRight() {
    const scrollContainer = document.getElementById('scrollContainer');
    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  }


}
