import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../../services/candidate.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-candidate-cvdisplay',
  standalone: true,
  imports: [],
  templateUrl: './candidate-cvdisplay.component.html',
  styleUrl: './candidate-cvdisplay.component.css'
})
export class CandidateCVDisplayComponent implements OnInit{
  
  constructor(private candidateService:CandidateService,private sanitizer: DomSanitizer,private activatedRoute: ActivatedRoute){}
  sanitizedUrl!: SafeResourceUrl;
  pdfName:string = ""
  candidateId!:any

  ngOnInit(): void {
    this.candidateId = this.activatedRoute.snapshot.paramMap.get('id');
    this.candidateService.getCVByCandidateId(this.candidateId).subscribe( data => {
      this.pdfName = data.pdf_name;
      console.log(this.pdfName)
      
      const pdfURL = `../../../../assets/Resumes/${this.pdfName}`
      this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(pdfURL);
      console.log(this.sanitizedUrl)
    }
    )
  }


  public getSafeUrl(url: string,pdfName:string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url+pdfName);
  }
}
