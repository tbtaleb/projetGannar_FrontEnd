import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { CandidateService } from '../../../services/candidate.service';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-upload-cv',
  standalone: true,
  imports: [],
  templateUrl: './upload-cv.component.html',
  styleUrls: ['./upload-cv.component.css']
})
export class UploadCvComponent {
  isLoading = false;

  selectedFile: File | null = null;

  constructor(private router: Router,private resumeService:CandidateService) {}

  triggerFileInput() {
    document.getElementById('resume-upload')?.click();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      
      // For this example, we'll just simulate a delay
      
    }
  }

  onUpload(){

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/pdf'})
    }

    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      this.resumeService.uploadCV(this.selectedFile).subscribe( data => {
        console.log("executed")
      })
    }
  }

}
