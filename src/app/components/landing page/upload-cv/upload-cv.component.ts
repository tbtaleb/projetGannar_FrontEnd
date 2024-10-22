import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-upload-cv',
  standalone: true,
  imports: [],
  templateUrl: './upload-cv.component.html',
  styleUrls: ['./upload-cv.component.css']
})
export class UploadCvComponent {
  isLoading = false;

  constructor(private router: Router) {}

  triggerFileInput() {
    document.getElementById('resume-upload')?.click();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.isLoading = true;
      // Here you would typically send the file to your backend
      // For this example, we'll just simulate a delay
      setTimeout(() => {
        this.isLoading = false;
        // Navigate to the user profile page
        this.router.navigate(['/user-profile']);
      }, 3000);
    }
  }
}
