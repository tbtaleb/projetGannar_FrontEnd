import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobOffer } from '../classes/job-offer';

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {

  jobOffersURL:string = "http://127.0.0.1:8000/api/jobs";

  constructor(private httpClient:HttpClient) {}

  getAllJobOffers():Observable<JobOffer[]>{
    return this.httpClient.get<JobOffer[]>(this.jobOffersURL);
  }

  getJobOfferById(jobOfferId:number):Observable<JobOffer>{
    return this.httpClient.get<JobOffer>(`${this.jobOffersURL}/${jobOfferId}`)
  }

  createJobOffer(jobOffer:JobOffer){
    return this.httpClient.post<JobOffer>(`${this.jobOffersURL}`,jobOffer)
  }

  deleteJobOffer(jobOfferId:number):Observable<JobOffer>{
    return this.httpClient.delete<JobOffer>(`${this.jobOffersURL}/${jobOfferId}`)
  }
}
