import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {
  constructor(private router: Router){}

  goToJobDetails() {
    this.router.navigate(['jobDetails']);
  }
}
