import { Component } from '@angular/core';
import { UploadCvComponent } from "../upload-cv/upload-cv.component";
import { JobComponent } from "../../AllJobs/job/job.component";

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [UploadCvComponent, JobComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
 
  scrollLeft() {
    const scrollContainer = document.getElementById('scrollContainer');
    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  }

  scrollRight() {
    const scrollContainer = document.getElementById('scrollContainer');
    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  }

  jobOffers = [
    { title: 'Software Engineer', company: 'TechCorp', shift: 'Full-time', payment: '$80,000 - $120,000/year', icon: 'fa-solid fa-laptop-code' },
    { title: 'Data Analyst', company: 'DataInsights', shift: 'Part-time', payment: '$30 - $40/hour', icon: 'fa-solid fa-chart-line' },
    { title: 'UX Designer', company: 'DesignHub', shift: 'Contract', payment: '$70,000 - $90,000/year', icon: 'fa-solid fa-pencil-ruler' },
    { title: 'Project Manager', company: 'AgileWorks', shift: 'Full-time', payment: '$90,000 - $130,000/year', icon: 'fa-solid fa-tasks' },
    { title: 'Marketing Specialist', company: 'BrandBoost', shift: 'Remote', payment: '$60,000 - $80,000/year', icon: 'fa-solid fa-bullhorn' },
    { title: 'Software Engineer', company: 'TechCorp', shift: 'Full-time', payment: '$80,000 - $120,000/year', icon: 'fa-solid fa-laptop-code' },
    { title: 'Data Analyst', company: 'DataInsights', shift: 'Part-time', payment: '$30 - $40/hour', icon: 'fa-solid fa-chart-line' },
    { title: 'UX Designer', company: 'DesignHub', shift: 'Contract', payment: '$70,000 - $90,000/year', icon: 'fa-solid fa-pencil-ruler' },
    { title: 'Project Manager', company: 'AgileWorks', shift: 'Full-time', payment: '$90,000 - $130,000/year', icon: 'fa-solid fa-tasks' },
    
  ];
}
