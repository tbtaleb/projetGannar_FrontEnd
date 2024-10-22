import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { HttpClientModule } from '@angular/common/http';

import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,
    RouterOutlet,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
