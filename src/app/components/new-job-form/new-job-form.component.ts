import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobOffer } from '../../classes/job-offer';
import { JobOfferService } from '../../services/job-offer.service';

import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-new-job-form',
  standalone: true,
  imports: [ReactiveFormsModule, ToastModule, CommonModule],
  providers: [MessageService],
  templateUrl: './new-job-form.component.html',
  styleUrl: './new-job-form.component.css',
})
export class NewJobFormComponent implements OnInit {
  jobOfferForm!: FormGroup;
  jobOfferId: number | null = null;
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private jobOfferService: JobOfferService,
    private authService: AuthService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.jobOfferForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      workTime: ['', [Validators.required]],
      location: ['', [Validators.required]],
      salary: ['', [Validators.required, Validators.min(0)]],
      skills: ['', [Validators.required]],
      company: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      numtel: ['', [Validators.required]],
      expirationDate: [null],
    });

    this.route.paramMap.subscribe((params) => {
      this.jobOfferId = Number(params.get('id'));
      if (this.jobOfferId) {
        this.isEditMode = true;
        this.loadJobOffer(this.jobOfferId);
      }
    });
  }

  loadJobOffer(jobOfferId: number): void {
    this.jobOfferService.getJobOfferById(jobOfferId).subscribe(
      (jobOffer) => {
        this.jobOfferForm.patchValue(jobOffer);
      },
      (error) => {
        
      }
    );
  }

  onSubmit(): void {
    if (this.jobOfferForm.valid) {
      const recruiter = this.authService.getUser();
      if (!recruiter) {
        console.error('No recruiter found');
        return;
      }

      const jobOffer: JobOffer = {
        Id: this.jobOfferId || 0, // Use the job offer ID if editing, otherwise 0
        recruiter: recruiter.id, // Use the recruiter ID from the auth service
        ...this.jobOfferForm.value,
      };

      if (this.isEditMode) {
        this.jobOfferService.editJobOffer(this.jobOfferId!, jobOffer).subscribe(
          (response) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Updated',
              detail: 'Job offer updated successfully',
            });
           
            this.router.navigate(['/jobs']);
          },
          (error) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Failed',
              detail: 'Failed to update job offer',
            });
           
          }
        );
      } else {
        this.jobOfferService.createJobOffer(jobOffer).subscribe(
          (response) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Created',
              detail: 'Job offer created successfully',
            });
            
            this.router.navigate(['/jobs']);
          },
          (error) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Failed',
              detail: 'Failed to create job offer',
            });
           
          }
        );
      }
    }
  }
}
