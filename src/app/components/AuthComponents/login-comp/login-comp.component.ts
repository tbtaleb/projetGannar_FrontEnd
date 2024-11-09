import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login-comp',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css'],
})
export class LoginCompComponent implements OnInit {
  loginForm!: FormGroup;
  selectedRole: 'candidate' | 'recruiter' = 'candidate';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  selectRole(role: 'candidate' | 'recruiter'): void {
    this.selectedRole = role;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log('Attempting login with:', email, 'Role:', this.selectedRole);

      this.authService.login(email, password, this.selectedRole).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          console.log('Access Token:', this.authService.getToken());
          console.log('Role:', this.authService.getRole());
          console.log('user:', this.authService.getUser());
          console.log('user:', this.authService.isAuthenticated());

          // Redirect to home or dashboard
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('Login failed:', error);
        },
      });
    } else {
      console.warn('Form is invalid');
    }
  }

  navigateHome(): void {
    this.router.navigate(['/home']);
  }
}
