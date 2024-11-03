import { Component, Input, OnInit } from '@angular/core';
import { JobOffer } from '../../../classes/job-offer';
import { JobOfferService } from '../../../services/job-offer.service';
import { Candidate } from '../../../classes/candidate';

@Component({
  selector: 'app-exp-job-details',
  standalone: true,
  imports: [],
  templateUrl: './exp-job-details.component.html',
  styleUrl: './exp-job-details.component.css'
})
export class ExpJobDetailsComponent implements OnInit{

  @Input() jobOfferId!: number
  jobOffer:any = {}
  jobApplicants: Candidate[] = [];
  constructor(private jobOfferService:JobOfferService){}

  ngOnInit(): void {
    this.getJobOfferById(this.jobOfferId)
    this.getApplicantsByJobOfferId(this.jobOfferId)
  }
  getApplicantsByJobOfferId(jobOfferId:number){
    this.jobOfferService.getAllApplicantsByJobOfferId(jobOfferId).subscribe(data => {
      this.jobApplicants = data
      console.log(this.jobApplicants)
    })
  }
  getJobOfferById(jobOfferId:number){
    this.jobOfferService.getJobOfferById(jobOfferId).subscribe(data => {
      this.jobOffer = data
      console.log(this.jobOffer);
    })
  }
  
}
