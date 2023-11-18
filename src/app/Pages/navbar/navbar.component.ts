import { Component, OnInit } from '@angular/core';
import {UserDataService } from '../../Shared/usershared.service';
import { AuthService } from 'src/app/Services/usersAuth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser: any;

  constructor(private userDataService: UserDataService , public auth:AuthService) {}

  ngOnInit() {
    this.currentUser = this.userDataService.getUser();
    if (this.currentUser && this.currentUser.username) {
      console.log('User name is:', this.currentUser.username);
    } else {
      console.log('User is not logged in or username is undefined.');
    }
  }

  logout(){
    //remove token
    this.auth.removeToken();
    this.auth.canAccess();
}

}
