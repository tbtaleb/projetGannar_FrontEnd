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
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-comp',
  standalone: true,

  providers: [MessageService],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    InputTextModule,
    ToastModule,
    FloatLabelModule,
  ],
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
    private messageService: MessageService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
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
          this.snackBar.open('You have successfully logged in', 'Close', {
            duration: 3000,
          });
          // Redirect to home or dashboard
          this.router.navigate(['/home']);
        },
        error: (error) => {
          this.messageService.add({
            severity: 'info',
            summary: 'Login failed',
            detail: ` ${error}`,
          });
        },
      });
    } else {
      this.messageService.add({
        severity: 'info',
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
