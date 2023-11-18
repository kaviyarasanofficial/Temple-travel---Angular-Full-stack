import { Injectable } from '@angular/core';

@Injectable()
export class UserDataService {
  currentUser: any;
  userStatus: string = 'offline';

  setUser(user: any) {
    this.currentUser = user;
  }

  getUser() {
    return this.currentUser;
    
  }

  setUserStatus(status: string) {
    this.userStatus = status;
  }

  getUserStatus() {
    return this.userStatus;
  }

  
}
