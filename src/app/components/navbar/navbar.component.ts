import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppNotificationsComponent } from '../RecruiterNotificationComp/app-notifications/app-notifications.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']  // Corrected this line
})
export class NavbarComponent {
  constructor(private router:Router) {}

  openNotificationDialog() {
    this.router.navigate(['notifications']);
  }
}
