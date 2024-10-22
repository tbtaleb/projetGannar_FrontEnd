import { Component } from '@angular/core';
import { UploadCvComponent } from "../upload-cv/upload-cv.component";

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [UploadCvComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {

}
