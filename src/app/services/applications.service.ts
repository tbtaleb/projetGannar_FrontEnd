import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from '../classes/application';

@Injectable({
  providedIn: 'root',
})
export class ApplicationsService {
  applicationsURL: string = 'http://127.0.0.1:8000/api/applications';
  specificapplicationURL: string = 'http://127.0.0.1:8000/api/getapplicationby';
  applyURL: string = 'http://127.0.0.1:8000/api';
  constructor(private httpClient: HttpClient) {}

  getAllApplications(candidateId: number): Observable<Application[]> {
    return this.httpClient.get<Application[]>(
      `${this.applicationsURL}/${candidateId}`
    );
  }
  getApplicationByCandidateIdAndJobOfferId(
    candidateId: number,
    jobOfferId: number
  ): Observable<Application> {
    return this.httpClient.get<Application>(
      `${this.specificapplicationURL}/${candidateId}/and/${jobOfferId}`
    );
  }
  apply(jobOfferId: number,candidateId: number
   ): Observable<any> {
    return this.httpClient.post<any>(
      `${this.applyURL}/apply/${jobOfferId}/${candidateId}`,
      {}
    );
  }

  deleteApplicationById(applicationId: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.applicationsURL}/${applicationId}/delete`
    );
  }
}
