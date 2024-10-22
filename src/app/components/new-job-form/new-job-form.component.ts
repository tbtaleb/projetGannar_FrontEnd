import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-job-form',
  standalone: true,
  imports: [],
  templateUrl: './new-job-form.component.html',
  styleUrl: './new-job-form.component.css'
})
export class NewJobFormComponent {
  
  constructor(private location: Location) {}

  navigateBack() {
    this.location.back();
  }
}
