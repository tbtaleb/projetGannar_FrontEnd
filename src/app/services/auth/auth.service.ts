import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(
    email: string,
    password: string,
    role: 'candidate' | 'recruiter'
  ): Observable<any> {
    const url = `${this.apiUrl}/${role}/login`;
    return this.http.post<any>(url, { email, password }).pipe(
      tap((response) => {
        // Store user details and JWT token in local storage
        localStorage.setItem('currentUser', JSON.stringify(response));
        this.currentUserSubject.next(response);
        console.log(this.currentUserSubject);
        
      })
    );
  }

  logout(): void {
    // Remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!this.currentUserValue;
  }

  getRole(): string {
    return this.currentUserValue?.role || null;
  }

  getToken(): string {
    return this.currentUserValue?.access_token || null;
  }
}
