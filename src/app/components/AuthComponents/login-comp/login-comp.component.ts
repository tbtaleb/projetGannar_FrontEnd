import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { log } from 'console';
import { CandidateService } from '../../../services/candidate.service';

@Component({
  selector: 'app-login-comp',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterModule],
  templateUrl: './login-comp.component.html',
  styleUrl: './login-comp.component.css',
})
export class LoginCompComponent implements OnInit {
  loginForm!: FormGroup;
  candidate:any = {}
  constructor(private fb: FormBuilder, private http: HttpClient,private candidateService:CandidateService,private router:Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      console.log('Login data', loginData);
      this.candidateService.login(this.loginForm.value).subscribe(
        (response) => {
          console.log('Login successful', response);
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Login failed', error);
        })
      // this.http.post('7ot il api ya ghzela', loginData).subscribe(
      //   (response) => {
      //     console.log('Login successful', response);
      //   },
      //   (error) => {
      //     console.error('Login failed', error);
      //   }
      // );
    }
  }

}
