import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  candidateURL:string = "http://127.0.0.1:8000/api/candidates";

  constructor(private httpClient:HttpClient) { }

  
}
