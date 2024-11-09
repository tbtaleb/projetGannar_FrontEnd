import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recruiter } from '../classes/recruiter';

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {

  recruitersURL:string = "http://127.0.0.1:8000/api/recruiters";
  tokenURL:string = "http://127.0.0.1:8000/api/recruiter-token";


  constructor(private httpClient:HttpClient) {}

  getAllRecruiters():Observable<Recruiter[]>{
    return this.httpClient.get<Recruiter[]>(this.recruitersURL);
  }

  getRecruiterById(recruiterId:number):Observable<Recruiter>{
    return this.httpClient.get<Recruiter>(`${this.recruitersURL}/${recruiterId}`)
  }

  createRecruiter(recruiter:Recruiter){
    return this.httpClient.post<Recruiter>(`${this.recruitersURL}`,recruiter)
  }

  deleteRecruiter(recruiterId:number):Observable<Recruiter>{
    return this.httpClient.delete<Recruiter>(`${this.recruitersURL}/${recruiterId}`)
  }

  login(recruiter:any){
    return this.httpClient.post<any>(`${this.tokenURL}`,recruiter,{
      withCredentials: true
    })
  }
}
