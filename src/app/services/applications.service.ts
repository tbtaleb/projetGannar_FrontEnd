import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from '../classes/application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  applicationsURL:string = "http://127.0.0.1:8000/api/applications";
  applyURL:string = "http://127.0.0.1:8000/api/application";
  constructor(private httpClient:HttpClient) {}

  getAllApplications(candidateId:number):Observable<Application[]>{
    return this.httpClient.get<Application[]>(`${this.applicationsURL}/${candidateId}`);
  }
  apply(candidateId:number,jobOfferId:number):Observable<Application>{
    return this.httpClient.get<Application>(`${this.applyURL}/${candidateId}/apply/${jobOfferId}`)
  }
}
