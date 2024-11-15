import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Match } from '../classes/match';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  matchesURL: string = `${environment.apiUrl}/matches`;
  jobMatchesURL: string = `${environment.apiUrl}/matchCandidateWithJobs`;

  constructor(private httpClient: HttpClient) {}

  getAllMatches(candidateId: number): Observable<Match[]> {
    return this.httpClient.get<Match[]>(`${this.matchesURL}/${candidateId}`);
  }

  matchCandidateWithJobs(candidateId: number): Observable<Match[]> {
    return this.httpClient.post<Match[]>(
      `${this.jobMatchesURL}/${candidateId}`,
      {}
    );
  }
}
