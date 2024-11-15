import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../classes/candidate';
import { CV } from '../classes/cv';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  candidatesURL: string = `${environment.apiUrl}/candidates`;
  tokenURL: string = `${environment.apiUrl}/candidate-token`;
  resumesURL: string = `${environment.apiUrl}/resumes`;

  constructor(private httpClient: HttpClient) {}

  getAllCandidates(): Observable<Candidate[]> {
    return this.httpClient.get<Candidate[]>(this.candidatesURL);
  }

  getCandidateById(candidateId: number): Observable<Candidate> {
    return this.httpClient.get<Candidate>(
      `${this.candidatesURL}/${candidateId}`
    );
  }

  createCandidate(candidate: Candidate) {
    return this.httpClient.post<Candidate>(
      `${this.candidatesURL}/register`,
      candidate
    );
  }

  deleteCandidate(candidateId: number): Observable<Candidate> {
    return this.httpClient.delete<Candidate>(
      `${this.candidatesURL}/${candidateId}`
    );
  }

  getCVByCandidateId(candidateId: number): Observable<CV> {
    return this.httpClient.get<CV>(
      `http://127.0.0.1:8000/api/candidateCV/${candidateId}`
    );
  }

  login(candidate: any) {
    return this.httpClient.post<any>(`${this.tokenURL}`, candidate, {
      withCredentials: true,
    });
  }

  uploadCV(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.resumesURL}`, formData, {
      reportProgress: true,
      responseType: 'json',
    });
    return this.httpClient.request(req);
  }

  // async getCandidate(): Promise<any>{
  //   const headers = new HttpHeaders({
  //     //'Authorization': `Bearer ${token}`,
  //     'Content-Type': 'application/json'
  //   });

  //   return this.httpClient.post<any>('http://127.0.0.1:8000/api/candidate', {}, {
  //     headers,
  //     withCredentials: true
  //   }).toPromise();
  // }
}
