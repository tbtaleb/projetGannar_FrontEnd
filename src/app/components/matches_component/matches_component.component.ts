import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatchesService } from '../../services/matches.service';
import { Match } from '../../classes/match';
import { MatchComponent } from '../match/match.component';
import { CandidateService } from '../../services/candidate.service';

@Component({
  selector: 'app-matches-component',
  standalone: true,
  imports: [CommonModule,MatchComponent],
  templateUrl: './matches_component.component.html',
  styleUrl: './matches_component.component.css',
})
export class MatchesComponentComponent implements OnInit{

  candidateMatches:Match[] = []
  candidate:any = {}
  constructor(private matchService:MatchesService,private candidateService:CandidateService){}

  ngOnInit(): void {
    this.matchService.getAllMatches(this.candidate.id).subscribe( data => {
      this.candidateMatches = data;
      console.log(this.candidateMatches);
    })
  }

  async loginUser(){
    try {
      const token = 'your-access-token';
      this.candidate = await this.candidateService.getCandidate();
      console.log('Candidate data:', this.candidate);
    } catch (error) {
      console.error('Error fetching candidate:', error);
    }
  }
}
