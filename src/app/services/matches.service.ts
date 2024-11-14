import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Match } from '../classes/match';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  matchesURL: string = 'http://127.0.0.1:8000/api/matches';
  jobMatchesURL: string = 'http://127.0.0.1:8000/api/matchCandidateWithJobs';

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
