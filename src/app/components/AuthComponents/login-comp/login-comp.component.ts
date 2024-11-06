import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-login-comp',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './login-comp.component.html',
  styleUrl: './login-comp.component.css',
})
export class LoginCompComponent implements OnInit {
  loginForm!: FormGroup;
  selectedRole: string = 'candidate';

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  selectRole(role: string): void {
    this.selectedRole = role;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const loginData = {
        ...this.loginForm.value,
        role: this.selectedRole,
      };
      console.log(loginData);
      
    //   this.http.post('3ayet lil backend ya ghzela', loginData).subscribe(
    //     (response) => {
    //       console.log('Login successful', response);
    //     },
    //     (error) => {
    //       console.error('Login failed', error);
    //     }
    //   );
    // }
  }

  
  }
}
