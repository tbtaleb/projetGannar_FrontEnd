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
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-login-comp',
  standalone: true,

  providers: [MessageService],
  imports: [ReactiveFormsModule, CommonModule, RouterModule, ToastModule],
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css'],
})
export class LoginCompComponent implements OnInit {
  loginForm!: FormGroup;
  selectedRole: 'candidate' | 'recruiter' = 'candidate';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  selectRole(role: 'candidate' | 'recruiter'): void {
    this.selectedRole = role;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.authService.login(email, password, this.selectedRole).subscribe({
        next: (response) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Login successful',
          });

          // Redirect to home or dashboard
          this.router.navigate(['/home']);
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Failed',
            detail: 'Login failed',
          });
        },
      });
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Invalid',
        detail: 'Form is invalid',
      });
      console.warn('Form is invalid');
    }
  }

  navigateHome(): void {
    this.router.navigate(['/home']);
  }
}
