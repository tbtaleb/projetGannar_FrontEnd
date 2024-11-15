import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobOffer } from '../classes/job-offer';
import { Candidate } from '../classes/candidate';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JobOfferService {
  jobOffersURL: string = `${environment.apiUrl}/jobs`;
  jobOffersHistoryURL: string = `${environment.apiUrl}/jobs-history`;
  applicantsURL: string = `${environment.apiUrl}/applicationCandidates`;

  constructor(private httpClient: HttpClient) {}

  getAllJobOffers(): Observable<JobOffer[]> {
    return this.httpClient.get<JobOffer[]>(this.jobOffersURL);
  }

  getAllApplicantsByJobOfferId(jobOfferId: number): Observable<Candidate[]> {
    return this.httpClient.get<Candidate[]>(
      `${this.applicantsURL}/${jobOfferId}`
    );
  }

  getJobOfferById(jobOfferId: number): Observable<JobOffer> {
    return this.httpClient.get<JobOffer>(`${this.jobOffersURL}/${jobOfferId}`);
  }

  getJobOfferByRecruiterId(recruiterId: number): Observable<JobOffer[]> {
    return this.httpClient.get<JobOffer[]>(
      `${this.jobOffersHistoryURL}/${recruiterId}`
    );
  }

  createJobOffer(jobOffer: JobOffer) {
    return this.httpClient.post<JobOffer>(`${this.jobOffersURL}`, jobOffer);
  }

  deleteJobOffer(jobOfferId: number): Observable<JobOffer> {
    return this.httpClient.delete<JobOffer>(
      `${this.jobOffersURL}/${jobOfferId}`
    );
  }

  editJobOffer(jobOfferId: number, jobOffer: JobOffer): Observable<JobOffer> {
    return this.httpClient.put<JobOffer>(
      `${this.jobOffersURL}/${jobOfferId}`,
      jobOffer
    );
  }
}
