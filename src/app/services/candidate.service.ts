import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../classes/candidate';
import { CV } from '../classes/cv';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  candidatesURL:string = "http://127.0.0.1:8000/api/candidates";
  resumesURL:string = "http://127.0.0.1:8000/api/resumes";

  constructor(private httpClient:HttpClient) {}

  getAllCandidates():Observable<Candidate[]>{
    return this.httpClient.get<Candidate[]>(this.candidatesURL);
  }

  getCandidateById(candidateId:number):Observable<Candidate>{
    return this.httpClient.get<Candidate>(`${this.candidatesURL}/${candidateId}`)
  }

  createCandidate(candidate:Candidate){
    return this.httpClient.post<Candidate>(`${this.candidatesURL}`,candidate)
  }

  deleteCandidate(candidateId:number):Observable<Candidate>{
    return this.httpClient.delete<Candidate>(`${this.candidatesURL}/${candidateId}`)
  }

  uploadCV(file: File):Observable<any>{

    const formData = new FormData();
    formData.append('file', file);

    const req = new HttpRequest(
      'POST',
      `${this.resumesURL}`,
      formData,
      {
        reportProgress: true,
        responseType: 'json',
      }
    );
    return this.httpClient.request(req);
  }

  
}
