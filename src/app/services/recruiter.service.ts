import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Recruiter } from '../classes/recruiter';
import { Candidate } from '../classes/candidate';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RecruiterService {
  recruitersURL: string = `${environment.apiUrl}/recruiters`;
  tokenURL: string = `${environment.apiUrl}/recruiter-token`;

  constructor(private httpClient: HttpClient) {}

  getAllRecruiters(): Observable<Recruiter[]> {
    return this.httpClient.get<Recruiter[]>(this.recruitersURL);
  }

  getRecruiterById(recruiterId: number): Observable<Recruiter> {
    return this.httpClient.get<Recruiter>(
      `${this.recruitersURL}/${recruiterId}`
    );
  }

  createRecruiter(recruiter: Recruiter) {
    return this.httpClient.post<Recruiter>(
      `${this.recruitersURL}/register`,
      recruiter
    ).pipe(catchError(this.handleError));;
  }

  deleteRecruiter(recruiterId: number): Observable<Recruiter> {
    return this.httpClient.delete<Recruiter>(
      `${this.recruitersURL}/${recruiterId}`
    );
  }

  getCandidatesByRecruiterId(recruiterId: number): Observable<any[]> {
    const url = `${this.recruitersURL}/${recruiterId}/candidates`;
    return this.httpClient.get<Candidate[]>(url);
  }

  login(recruiter: any) {
    return this.httpClient.post<any>(`${this.tokenURL}`, recruiter, {
      withCredentials: true,
    });
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error: ${error.error.error}`;
    }
    return throwError(errorMessage);
  }
}
