import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { FileUploadEvent, FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FileUploadModule, ToastModule, CommonModule],
  providers: [MessageService],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent implements OnInit{
  candidateId!: any;
  iframeUrl!: SafeResourceUrl;
  test: boolean = false;
  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService,private route: ActivatedRoute,private sanitizer: DomSanitizer,private activatedRoute: ActivatedRoute,) {}

  ngOnInit(): void {
    
    // Get the candidateId from the route parameters
    this.candidateId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.candidateId)
    const url = `http://localhost:8501/?p=home&candidateId=${this.candidateId}`;
    // Construct the iframe URL with the candidateId parameter
    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);;
  }

  onUpload(event: FileUploadEvent) {
     this.messageService.add({
       severity: 'info',
       summary: 'File Uploaded',
       detail: '',
     });
    this.test = true
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

   
  }
}
