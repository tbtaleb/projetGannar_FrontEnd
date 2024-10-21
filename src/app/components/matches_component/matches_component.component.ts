import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatchesService } from '../../services/matches.service';
import { Match } from '../../classes/match';
import { MatchComponent } from '../match/match.component';

@Component({
  selector: 'app-matches-component',
  standalone: true,
  imports: [CommonModule,MatchComponent],
  templateUrl: './matches_component.component.html',
  styleUrl: './matches_component.component.css',
})
export class MatchesComponentComponent implements OnInit{

  candidateMatches:Match[] = []

  constructor(private matchService:MatchesService){}

  ngOnInit(): void {
    this.matchService.getAllMatches(1).subscribe( data => {
      this.candidateMatches = data;
      console.log(this.candidateMatches);
    })
  }
  
}
