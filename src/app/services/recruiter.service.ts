import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recruiter } from '../classes/recruiter';
import { Candidate } from '../classes/candidate';

@Injectable({
  providedIn: 'root',
})
export class RecruiterService {
  recruitersURL: string = 'http://127.0.0.1:8000/api/recruiters';
  tokenURL: string = 'http://127.0.0.1:8000/api/recruiter-token';

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
    );
  }

  deleteRecruiter(recruiterId: number): Observable<Recruiter> {
    return this.httpClient.delete<Recruiter>(
      `${this.recruitersURL}/${recruiterId}`
    );
  }

  getCandidatesByRecruiterId(recruiterId: number): Observable<Candidate[]> {
    const url = `${this.recruitersURL}/${recruiterId}/candidates`;
    return this.httpClient.get<Candidate[]>(url);
  }

  login(recruiter: any) {
    return this.httpClient.post<any>(`${this.tokenURL}`, recruiter, {
      withCredentials: true,
    });
  }
}
