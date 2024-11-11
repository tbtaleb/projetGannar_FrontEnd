import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { ApplicationsService } from '../../../services/applications.service';
import { Application } from '../../../classes/application';
import { AuthService } from '../../../services/auth/auth.service';
import { JobOfferService } from '../../../services/job-offer.service';
import { JobOfferDetailComponent } from '../job-offer-detail/job-offer-detail.component';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';


@Component({
  selector: 'app-applications-list',
  standalone: true,
  imports: [CommonModule, ToastModule],
  templateUrl: './applications-list.component.html',
  styleUrl: './applications-list.component.css',
  providers: [DialogService, MessageService],
})
export class ApplicationsListComponent implements OnInit {
  applications: Application[] = [];
  jobOffers: { [key: number]: any } = {};
  ref: DynamicDialogRef | undefined;

  constructor(
    private applicationsService: ApplicationsService,
    private authService: AuthService,
    private jobOfferService: JobOfferService,
    private dialogService: DialogService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loadApplications();
  }

  loadApplications(): void {
    const candidate = this.authService.getUser();
    console.log('Candidate:', candidate);

    if (candidate) {
      this.applicationsService.getAllApplications(candidate.id).subscribe(
        (data) => {
          this.applications = data;
          console.log(this.applications);
          this.loadJobOffers();
        },
        (error) => {
          console.error('Error fetching applications:', error);
        }
      );
    } else {
      console.error('No candidate found');
    }
  }

  loadJobOffers(): void {
    this.applications.forEach((application) => {
      this.jobOfferService.getJobOfferById(application.jobOffer).subscribe(
        (jobOffer) => {
          this.jobOffers[application.jobOffer] = jobOffer;
        },
        (error) => {
          console.error('Error fetching job offer:', error);
        }
      );
    });
  }

  deleteApplication(applicationId: number): void {
    this.applicationsService.deleteApplicationById(applicationId).subscribe(
      (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Deleted',
          detail: 'Application deleted successfully',
        });
        this.loadApplications(); // Reload the applications after deletion
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Failed',
          detail: 'Failed to delete application',
        });
        console.error('Error deleting application:', error);
      }
    );
  }

  showJobOfferDetails(jobOfferId: number): void {
    const jobOffer = this.jobOffers[jobOfferId];
    this.ref = this.dialogService.open(JobOfferDetailComponent, {
      header: 'Job Offer Details',
      width: '70%',
      contentStyle: { 'max-height': '500px', overflow: 'auto' },
      baseZIndex: 10000,
      data: jobOffer,
    });
  }
}
