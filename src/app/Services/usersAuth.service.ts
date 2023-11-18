import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {
  
  private user: { username: string; password: string } | null = null;
private authenticated: boolean = false; 
  constructor(private router:Router,) {}

  login(username: string, password: string): boolean {
    // Implement your login logic here, such as making an HTTP request to verify the user's credentials.
    // For this example, we'll check if the provided credentials match.
    if (this.user && this.user.username === username && this.user.password === password) {
      this.authenticated = true;
      return true;
    }
    return false;
  }

  signup(username: string, password: string): boolean {
    // Implement user registration logic here, typically by making an HTTP POST request to your server.
    // For this example, we'll set the user data.
    this.user = { username, password };
    this.authenticated = true;
    return true;
  }

  logout(): void {
    this.authenticated = false;
    this.user = null;
  }

  isAuthenticatedUser(): boolean {
    return this.authenticated;
  }

  isAuthenticated():boolean{
    if (sessionStorage.getItem('token')!==null) {
        return true;
    }
    return false;
  }

  canAccess(){
    if (!this.isAuthenticated()) {
        //redirect to login
        this.router.navigate(['/login']);
    }
  }
  canAuthenticate(){
    if (this.isAuthenticated()) {
      //redirect to dashboard
      this.router.navigate(['/']);
    }
  }

  removeToken(){
    sessionStorage.removeItem('token');
  }
}
