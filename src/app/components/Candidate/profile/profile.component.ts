import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CandidateService } from '../../../services/candidate.service';
import { AuthService } from '../../../services/auth/auth.service';
import { Candidate } from '../../../classes/candidate';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  sanitizedUrl!: SafeResourceUrl;
  candidate!:Candidate
  pdfName:string = ""
  constructor(private sanitizer: DomSanitizer,private activatedRoute: ActivatedRoute,private candidateService:CandidateService,private authService:AuthService){}

  ngOnInit(): void {
    this.candidate = this.authService.getUser();
    console.log(this.candidate)
  }


  public getSafeUrl(url: string,pdfName:string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url+pdfName);
  }
}
