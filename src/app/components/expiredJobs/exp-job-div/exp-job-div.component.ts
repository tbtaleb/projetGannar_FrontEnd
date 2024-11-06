import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { PrimeNGConfig } from 'primeng/api';
import { ExpJobDetailsComponent } from "../exp-job-details/exp-job-details.component";
import { log } from 'console';
@Component({
  selector: 'app-exp-job-div',
  standalone: true,
  imports: [DialogModule, ExpJobDetailsComponent], 
  templateUrl: './exp-job-div.component.html',
  styleUrl: './exp-job-div.component.css'
})
export class ExpJobDivComponent {
  visible: boolean = false;
  showDialog() {
    this.visible=true
    console.log("butoon");
  }

}
