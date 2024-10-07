import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidate-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './candidate-info.component.html',
  styleUrl: './candidate-info.component.css',
})
export class CandidateInfoComponent {
  

  candidateId!: number;

  
}
