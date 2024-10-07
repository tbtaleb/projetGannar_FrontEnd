import { Component } from '@angular/core';
import { SingleCandidateComponent } from '../single-candidate/single-candidate.component';

@Component({
  selector: 'app-candidates-list',
  standalone: true,
  imports: [SingleCandidateComponent,],
  templateUrl: './candidates-list.component.html',
  styleUrl: './candidates-list.component.css'
})
export class CandidatesListComponent {

}
