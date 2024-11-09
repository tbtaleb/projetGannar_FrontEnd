import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JobOffer } from '../../classes/job-offer';
import { JobOfferService } from '../../services/job-offer.service';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-new-job-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-job-form.component.html',
  styleUrl: './new-job-form.component.css',
})
export class NewJobFormComponent implements OnInit {
  jobOfferForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private jobOfferService: JobOfferService,
    private authService: AuthService
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
  }

  onSubmit(): void {
    if (this.jobOfferForm.valid) {
      const recruiter = this.authService.getUser();
      if (!recruiter) {
        console.error('No recruiter found');
        return;
      }

      const jobOffer: JobOffer = {
        Id: 0, // Assuming ID is auto-generated
        recruiter: recruiter.id, // Use the recruiter ID from the auth service
        ...this.jobOfferForm.value,
      };

      this.jobOfferService.createJobOffer(jobOffer).subscribe(
        (response) => {
          console.log('Job offer created successfully', response);
        },
        (error) => {
          console.error('Failed to create job offer', error);
        }
      );
    }
  }
}
