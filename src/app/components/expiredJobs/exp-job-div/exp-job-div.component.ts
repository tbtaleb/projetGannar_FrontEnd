import { Component, Input, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { PrimeNGConfig } from 'primeng/api';
import { ExpJobDetailsComponent } from "../exp-job-details/exp-job-details.component";
import { log } from 'console';
import { JobOffer } from '../../../classes/job-offer';
import { ActivatedRoute } from '@angular/router';
import { JobOfferService } from '../../../services/job-offer.service';
@Component({
  selector: 'app-exp-job-div',
  standalone: true,
  imports: [DialogModule, ExpJobDetailsComponent], 
  templateUrl: './exp-job-div.component.html',
  styleUrl: './exp-job-div.component.css'
})
export class ExpJobDivComponent implements OnInit{

  

  @Input() jobOffer!: JobOffer 
  visible: boolean = false;
  jobApplicants: any[] = [];

  constructor(private activatedRoute:ActivatedRoute,private jobOfferService:JobOfferService){}

  ngOnInit(): void {
    this.getApplicantsByJobOfferId(this.jobOffer.Id);
  }
  getApplicantsByJobOfferId(jobOfferId:number){
    this.jobOfferService.getAllApplicantsByJobOfferId(jobOfferId).subscribe(data => {
      this.jobApplicants = data
      console.log(this.jobApplicants)
    })
  }
  showDialog() {
    this.visible=true
    console.log("butoon");
  }

}
