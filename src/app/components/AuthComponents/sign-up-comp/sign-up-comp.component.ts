import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CandidateService } from '../../../services/candidate.service';
import { RecruiterService } from '../../../services/recruiter.service';
import { Candidate } from '../../../classes/candidate';
import { Recruiter } from '../../../classes/recruiter';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up-comp',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, ToastModule],
  providers: [MessageService],
  templateUrl: './sign-up-comp.component.html',
  styleUrls: ['./sign-up-comp.component.css'],
})
export class SignUpCompComponent implements OnInit {
  signUpForm!: FormGroup;
  selectedRole: string = 'candidate'; // Default role

  constructor(
    private fb: FormBuilder,
    private candidateService: CandidateService,
    private recruiterService: RecruiterService,
    private router: Router,
    private messageService: MessageService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group(
      {
        name: ['', [Validators.required]],

        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
        phoneNumber: [''],
        address: [''],
        dateOfBirth: [''],
        company: [''],
        companyAddress: [''],
        post: [''],
        domain: [''],
      },
      { validator: this.passwordMatchValidator }
    );
  }
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')!.value;
    const confirmPassword = form.get('confirmPassword')!.value;
    if (password !== confirmPassword) {
      form.get('confirmPassword')!.setErrors({ mismatch: true });
    } else {
      form.get('confirmPassword')!.setErrors(null);
    }
  }
  selectRole(role: string): void {
    this.selectedRole = role;
    if (role === 'recruiter') {
      this.signUpForm.get('name')!.setValidators([Validators.required]);
      this.signUpForm.get('company')!.setValidators([Validators.required]);
      this.signUpForm
        .get('companyAddress')!
        .setValidators([Validators.required]);
      this.signUpForm.get('post')!.setValidators([Validators.required]);
      this.signUpForm.get('domain')!.setValidators([Validators.required]);
      this.signUpForm.get('phoneNumber')!.setValidators([Validators.required]);
      this.signUpForm.get('address')!.setValidators([Validators.required]);
      //this.signUpForm.get('name')!.clearValidators();
      this.signUpForm.get('dateOfBirth')!.clearValidators();
    } else {
      //this.signUpForm.get('name')!.setValidators([Validators.required]);
      this.signUpForm.get('phoneNumber')!.setValidators([Validators.required]);
      this.signUpForm.get('address')!.setValidators([Validators.required]);
      this.signUpForm.get('dateOfBirth')!.setValidators([Validators.required]);
      this.signUpForm.get('name')!.clearValidators();
      this.signUpForm.get('company')!.clearValidators();
      this.signUpForm.get('companyAddress')!.clearValidators();
      this.signUpForm.get('post')!.clearValidators();
      this.signUpForm.get('domain')!.clearValidators();
    }
    this.signUpForm.get('name')!.updateValueAndValidity();
    this.signUpForm.get('company')!.updateValueAndValidity();
    this.signUpForm.get('companyAddress')!.updateValueAndValidity();
    this.signUpForm.get('post')!.updateValueAndValidity();
    this.signUpForm.get('domain')!.updateValueAndValidity();
    this.signUpForm.get('phoneNumber')!.updateValueAndValidity();
    this.signUpForm.get('address')!.updateValueAndValidity();
    //this.signUpForm.get('name')!.updateValueAndValidity();
    this.signUpForm.get('dateOfBirth')!.updateValueAndValidity();
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      if (this.selectedRole === 'candidate') {
        const candidate = new Candidate(
          0, // Assuming ID is auto-generated
          this.signUpForm.get('name')!.value,
          this.signUpForm.get('email')!.value,
          this.signUpForm.get('password')!.value,
          this.signUpForm.get('phoneNumber')!.value,
          this.signUpForm.get('address')!.value,
          this.signUpForm.get('dateOfBirth')!.value
        );
        this.candidateService.createCandidate(candidate).subscribe(
          (response) => {
            this.snackBar.open('You have successfully Created your accout,you can log in now', 'Close', {
              duration: 5000,
            });
            this.router.navigate(['/login']);
          },
          (error) => {
            this.messageService.add({
              severity: 'info',
              summary: 'Candidate sign-up failed',
              detail: `${error}`,
            });
          }
        );
      } else if (this.selectedRole === 'recruiter') {
        const recruiter = new Recruiter(
          0, // Assuming ID is auto-generated
          this.signUpForm.get('name')!.value,
          this.signUpForm.get('password')!.value,
          this.signUpForm.get('email')!.value,
          this.signUpForm.get('company')!.value,
          this.signUpForm.get('companyAddress')!.value,
          this.signUpForm.get('post')!.value,
          this.signUpForm.get('domain')!.value,
          this.signUpForm.get('phoneNumber')!.value
        );
        this.recruiterService.createRecruiter(recruiter).subscribe(
          (response) => {
            this.snackBar.open(
              'You have successfully Created your accout,you can log in now',
              'Close',
              {
                duration: 5000,
              }
            );
            this.router.navigate(['/login'])
          },
          (error) => {
            this.messageService.add({
              severity: 'info',
              summary: 'Recruiter sign-up failed',
              detail: `${error}`,
            });
          }
        );
      }
    }
  }

  navigateHome() {
    this.router.navigate(['/home']);
  }
}
