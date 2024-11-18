import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  canActivate(): boolean {
    const role = this.authService.getRole();
    if (this.authService.isAuthenticated() && role === 'recruiter') {
      return true;
    }
    this.snackBar.open(
      'You do not have permission to access this page',
      'Close',
      {
        duration: 3000,
      }
    );
    this.router.navigate(['/login']);
    return false;
    
  }
}
