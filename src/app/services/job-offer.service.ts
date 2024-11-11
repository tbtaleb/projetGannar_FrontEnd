import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobOffer } from '../classes/job-offer';
import { Candidate } from '../classes/candidate';

@Injectable({
  providedIn: 'root',
})
export class JobOfferService {
  jobOffersURL: string = 'http://127.0.0.1:8000/api/jobs';
  jobOffersHistoryURL: string = 'http://127.0.0.1:8000/api/jobs-history';
  applicantsURL: string = 'http://127.0.0.1:8000/api/applicationCandidates';

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
