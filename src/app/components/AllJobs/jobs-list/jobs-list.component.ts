import { Component, OnInit } from '@angular/core';
import { JobComponent } from "../job/job.component";
import { JobOffer } from '../../../classes/job-offer';
import { JobOfferService } from '../../../services/job-offer.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [JobComponent, HttpClientModule],
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.css'
})
export class JobsListComponent implements OnInit {

  jobOffers: JobOffer[] = [];
  searchTerm: string = ''; // Terme de recherche pour filtrer les offres

  constructor(private jobOfferService: JobOfferService) { }

  ngOnInit(): void {
    this.getAllJobOffers();
  }

  getAllJobOffers() {
    this.jobOfferService.getAllJobOffers().subscribe(data => {
      this.jobOffers = data;
      console.log(this.jobOffers);
    });
  }

  // Méthode pour filtrer les offres d'emploi en fonction du terme de recherche
  filteredJobOffers() {
    if (!this.searchTerm) {
      return this.jobOffers; // Si aucun terme de recherche, retourner toutes les offres
    }
    return this.jobOffers.filter(job =>
      job.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}