import { Component } from '@angular/core';
import {UserDataService } from '../../Shared/usershared.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  currentUser: any;
  constructor(private userDataService: UserDataService) {}
 
  ngOnInit() {
   this.currentUser = this.userDataService.getUser();
    if (this.currentUser && this.currentUser.username) {
      console.log('User name is:', this.currentUser.username);
    } else {
      console.log('User is not logged in or username is undefined.');
    }
  }
}
