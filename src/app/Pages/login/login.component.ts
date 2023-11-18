// without auth
import { Component } from '@angular/core';
import { UsersService } from '../../Services/users.service';
import {UserDataService } from '../../Shared/usershared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private userService: UsersService,private userDataService: UserDataService,private router: Router) {}

  login(username: string, password: string) {
    this.userService.loginUser(username, password).subscribe((response: any) => {
      if (response.status === 1) {
        // Login successful
        console.log('Login successful');
        const token = response.token; // Extract token from the response
        sessionStorage.setItem('token', token); 
        this.userDataService.setUser({ username: username });
        this.router.navigate(['/']);
        this.userDataService.setUserStatus('online');
      } else {
        // Login failed
        console.log('Login failed');
        this.router.navigate(['/signup']);
      }
    });
  }


}

