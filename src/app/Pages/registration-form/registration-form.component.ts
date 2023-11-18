import { Component } from '@angular/core';
import { UsersService } from '../../Services/users.service';
import { Router } from '@angular/router';

interface ApiResponse {
  token: string;
  // Add other properties if they exist in the actual response
  // For instance: status: number;
  // message: string;
}


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent {



  user = {
    username: '',
    email: '',
    password: '',
  };

  constructor(private usersService: UsersService, private router: Router) {}

  onSubmit() {
    this.usersService.registerUser(this.user).subscribe(
      (response: any) => {
        console.log('User registered successfully', response);
        const token = response.token; // Extract token from the response
        sessionStorage.setItem('token', token); // Store token in session storage
        console.log('User registered successfully', token);
        // Clear the form after successful registration if needed
        this.user = { username: '', email: '', password: '' };
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Registration failed', error);
      }
    );
  }
  

}
