import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Candidate } from '../../../classes/candidate';
import { CandidateService } from '../../../services/candidate.service';
import { CandidateDetailComponent } from '../candidate-detail/candidate-detail.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recommanded-candidate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommanded-candidate.component.html',
  styleUrl: './recommanded-candidate.component.css',
  providers: [DialogService],
})
export class RecommandedCandidateComponent implements OnInit {
  recommendedCandidates: Candidate[] = [];
  ref!: DynamicDialogRef;

  constructor(
    private candidateService: CandidateService,
    public dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.candidateService.getRecommendedCandidates().subscribe((candidates) => {
      this.recommendedCandidates = candidates;
    });
  }

  showCandidateDetails(candidate: Candidate): void {
    this.ref = this.dialogService.open(CandidateDetailComponent, {
      data: {
        candidate: candidate,
      },
      header: 'Candidate Details',
      width: '70%',
    });
  }
}
