import { Component, OnInit } from '@angular/core';
import { JobComponent } from "../job/job.component";
import { JobOffer } from '../../../classes/job-offer';
import { JobOfferService } from '../../../services/job-offer.service';
import { log } from 'console';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [JobComponent,HttpClientModule],
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.css'
})
export class JobsListComponent implements OnInit{

  jobOffers:JobOffer[] = []

  constructor(private jobOfferService:JobOfferService){}

  ngOnInit(): void {
    this.getAllJobOffers();
  }

  getAllJobOffers(){
    this.jobOfferService.getAllJobOffers().subscribe( data => {
      this.jobOffers = data;
      console.log(this.jobOffers);
    })
  }
}
