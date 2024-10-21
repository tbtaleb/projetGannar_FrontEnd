import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobOffer } from '../../../classes/job-offer';
import { JobOfferService } from '../../../services/job-offer.service';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent implements OnInit{

  id:any
  jobOffer!:JobOffer 
  constructor(private location: Location,private activatedRoute:ActivatedRoute,private jobService:JobOfferService) {}

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.getJobById(this.id);
  }
  getJobById(id:number){
    this.jobService.getJobOfferById(id).subscribe( data => {
      this.jobOffer = data;
      console.log(this.jobOffer);
    })
  }
  // Function to navigate back
  navigateBack() {
    this.location.back();  // Navigates to the previous page
  }
}
