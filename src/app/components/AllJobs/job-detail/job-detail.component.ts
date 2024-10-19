import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent {
  constructor(private location: Location) {}

  // Function to navigate back
  navigateBack() {
    this.location.back();  // Navigates to the previous page
  }
}
