import { Component, OnInit } from '@angular/core';
import { JobComponent } from "../job/job.component";
import { JobOffer } from '../../../classes/job-offer';
import { JobOfferService } from '../../../services/job-offer.service';
import { HttpClientModule } from '@angular/common/http';
import { CandidateService } from '../../../services/candidate.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [JobComponent, HttpClientModule, CommonModule, FormsModule],
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.css',
})
export class JobsListComponent implements OnInit {
  jobOffers: JobOffer[] = [];
  filteredJobOffers: JobOffer[] = [];
  filters = {
    name: '',
    location: '',
    salary: 10000,
  };
  candidate: any = {};

  constructor(
    private jobOfferService: JobOfferService,
    private candidateService: CandidateService
  ) {}

  ngOnInit(): void {
    this.getAllJobOffers();
  }

  getAllJobOffers() {
    this.jobOfferService.getAllJobOffers().subscribe((data) => {
      this.jobOffers = data;
      this.filteredJobOffers = data;
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