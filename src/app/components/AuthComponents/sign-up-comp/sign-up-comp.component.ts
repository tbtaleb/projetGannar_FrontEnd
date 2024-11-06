import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CandidateService } from '../../../services/candidate.service';

@Component({
  selector: 'app-sign-up-comp',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterModule],
  templateUrl: './sign-up-comp.component.html',
  styleUrl: './sign-up-comp.component.css',
})
export class SignUpCompComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient,private CandidateService:CandidateService,private router:Router) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      const signUpData = this.signUpForm.value;
      console.log('Sign-up data', signUpData);
      //console.log(signUpData)
      this.CandidateService.createCandidate(signUpData).subscribe(data => {
        console.log(data)
      })
      this.router.navigate(['login']);
      // this.http
      //   .post('7ot il api ya ghzela', signUpData)
      //   .subscribe(
      //     (response) => {
      //       console.log('Sign-up successful', response);
      //     },
      //     (error) => {
      //       console.error('Sign-up failed', error);
      //     }
      //   );
    }
  }
}