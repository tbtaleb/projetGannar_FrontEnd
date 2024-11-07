import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  onEmailInput(event: Event) {
    this.email = (event.target as HTMLInputElement).value;
  }

  onPasswordInput(event: Event) {
    this.password = (event.target as HTMLInputElement).value;
  }

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Handle login logic here
  }

}
