import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CandidateService } from '../../../services/candidate.service';
import { AuthService } from '../../../services/auth/auth.service';
import { Candidate } from '../../../classes/candidate';
import { CV } from '../../../classes/cv';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  sanitizedUrl!: SafeResourceUrl;
  candidate!: Candidate;
  candidateCV!: CV;
  pdfName: string = '';

  constructor(
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute,
    private candidateService: CandidateService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.candidate = this.authService.getUser();
    this.loadCandidateCV();
  }

  loadCandidateCV(): void {
    this.candidateService
      .getCVByCandidateId(this.candidate.id)
      .subscribe((cv) => {
        this.candidateCV = cv;
        this.pdfName = cv.pdf_name;
        this.sanitizedUrl = this.getSafeUrl(
          this.candidateService.resumesURL,
          this.pdfName
        );
      });
  }

  public getSafeUrl(url: string, pdfName: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url + pdfName);
  }
}
