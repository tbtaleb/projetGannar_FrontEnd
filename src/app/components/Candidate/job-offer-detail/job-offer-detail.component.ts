import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
@Component({
  selector: 'app-job-offer-detail',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './job-offer-detail.component.html',
  styleUrl: './job-offer-detail.component.css',
})
export class JobOfferDetailComponent {
  jobOffer: any;

  constructor(public config: DynamicDialogConfig) {
    this.jobOffer = this.config.data;
  }
}
