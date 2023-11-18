import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any>('https://reqres.in/api/users');
  }

  getSurveys() {
    return this.http.get<any>('https://sgecrm.rectusmedia.in/api/getall');
  }

  postSurvey(data: any) {
    return this.http.post('https://sgecrm.rectusmedia.in/api/postall', data);
  }

  registerUser(user: any) {
    return this.http.post('https://sgecrm.rectusmedia.in/api/usersignup', user);
  }

  loginUser(username: string, password: string) {
    const url = 'https://sgecrm.rectusmedia.in/api/usersignin'; 
    const data = { username: username, password: password };

    return this.http.post(url, data);
  }

}