import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatchesComponentComponent } from './components/matches_component/matches_component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatchesComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEndGannar2';
}
