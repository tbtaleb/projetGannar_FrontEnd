import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Candidate } from '../../../classes/candidate';
import { CV } from '../../../classes/cv';
import { CandidateService } from '../../../services/candidate.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-candidate-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './candidate-detail.component.html',
  styleUrl: './candidate-detail.component.css',
})
export class CandidateDetailComponent {
  candidate: Candidate;
  candidateCV!: CV;

  constructor(
    public config: DynamicDialogConfig,
    private candidateService: CandidateService
  ) {
    this.candidate = this.config.data.candidate;
  }

  ngOnInit(): void {
    this.candidateService
      .getCVByCandidateId(this.candidate.id)
      .subscribe((cv) => {
        this.candidateCV = cv;
      });
  }
}
