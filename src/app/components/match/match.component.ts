import { Component, Input, OnInit } from '@angular/core';
import { Match } from '../../classes/match';
import { JobOfferService } from '../../services/job-offer.service';
import { ApplicationsService } from '../../services/applications.service';

@Component({
  selector: 'app-match',
  standalone: true,
  imports: [],
  templateUrl: './match.component.html',
  styleUrl: './match.component.css'
})
export class MatchComponent implements OnInit{

  constructor(private jobOfferService:JobOfferService,private applicationService:ApplicationsService){}

  job:any

  ngOnInit(): void {
    this.jobOfferService.getJobOfferById(Number(this.jobMatch.jobOffer)).subscribe( data => {
      this.job = data
      console.log(this.job)
    })
  }

  applyForJob(){
    this.applicationService.apply(1,this.job.Id).subscribe( data => {
      console.log(data)
    })
  }

  @Input() jobMatch!:Match



}
