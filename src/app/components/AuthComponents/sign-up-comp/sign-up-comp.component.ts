import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up-comp',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterModule],
  templateUrl: './sign-up-comp.component.html',
  styleUrl: './sign-up-comp.component.css',
})
export class SignUpCompComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      const signUpData = this.signUpForm.value;
      console.log('Sign-up data', signUpData);
      
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