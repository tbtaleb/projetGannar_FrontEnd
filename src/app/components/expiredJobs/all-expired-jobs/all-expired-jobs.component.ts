import { Component, OnInit } from '@angular/core';
import { ExpJobDivComponent } from "../exp-job-div/exp-job-div.component";
import { JobOffer } from '../../../classes/job-offer';
import { JobOfferService } from '../../../services/job-offer.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-expired-jobs',
  standalone: true,
  imports: [ExpJobDivComponent, CommonModule, FormsModule],
  templateUrl: './all-expired-jobs.component.html',
  styleUrl: './all-expired-jobs.component.css',
})
export class AllExpiredJobsComponent implements OnInit {
  jobOffers: JobOffer[] = [];
  filteredJobOffers: JobOffer[] = [];
  filters = {
    name: '',
    location: '',
    salary: 10000,
  };
  id: any;

  constructor(
    private jobOfferService: JobOfferService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getAllJobOffers(this.id);
  }

  getAllJobOffers(recruiterId: number) {
    this.jobOfferService
      .getJobOfferByRecruiterId(recruiterId)
      .subscribe((data) => {
        this.jobOffers = data;
        this.filteredJobOffers = data;
        console.log(this.jobOffers);
      });
  }

  applyFilters() {
    this.filteredJobOffers = this.jobOffers.filter((job) => {
      return (
        job.name.toLowerCase().includes(this.filters.name.toLowerCase()) &&
        job.location
          .toLowerCase()
          .includes(this.filters.location.toLowerCase()) &&
        job.salary <= this.filters.salary
      );
    });
  }
}
