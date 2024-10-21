import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JobOffer } from '../../../classes/job-offer';
import { JobOfferService } from '../../../services/job-offer.service';
import { ApplicationsService } from '../../../services/applications.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
  constructor(private http:HttpClient,private location: Location,private activatedRoute:ActivatedRoute,private jobService:JobOfferService,private applicationService:ApplicationsService) {}

  

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.getJobById(this.id);
  }

  
  getJobById(id:number){
    this.jobService.getJobOfferById(1).subscribe( data => {
      this.jobOffer = data;
      console.log(this.jobOffer);
    })
  }

  applyForJob(){
    this.applicationService.apply(1,this.jobOffer.Id).subscribe( data => {
      console.log(data)
    })
  }
  // Function to navigate back
  navigateBack() {
    this.location.back();  // Navigates to the previous page
  }
}
