import { Injectable } from '@angular/core';

/* Routers */
import {Router} from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../../Models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private Url = 'http://localhost:3000/';

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  register(user: User) {
    const json = JSON.stringify(user);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<User>(this.Url+'register' , json, { headers: headers});
  }

  login(user: User) {
    const json = JSON.stringify(user);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<User>(this.Url+'auth/login' , json, { headers: headers});
  }

  setSession(user: User, token:string): void {

    localStorage.setItem('id', String(user._id))
    localStorage.setItem('token', token)
    localStorage.setItem('username', user.username)
    localStorage.setItem('name', user.name)
    //localStorage.setItem('email', user.email)
  }

  isAuth(): boolean {
    if (localStorage.getItem('token') != null  ) {
      return true
    }else{
      return false
    }
  }

  logout(): void {
    localStorage.removeItem('id')
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    localStorage.removeItem('name')
    localStorage.removeItem('email')

    this.router.navigate(['/'])

  }

}
