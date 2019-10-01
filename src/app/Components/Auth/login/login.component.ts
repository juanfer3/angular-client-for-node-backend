import { Component, OnInit } from '@angular/core';

import { AuthService } from "../../../Services/Auth/auth.service";

import { User } from "../../../Models/User";

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor( private auth: AuthService ) { }

  ngOnInit() {
  }

  login(username:HTMLInputElement, password:HTMLInputElement){

    let user: User = {
      username: username.value,
      password: password.value
    }

    this.auth.login(user)
      .subscribe(
        res => {
          console.log(res);
          console.log(res['user']);
          this.auth.setSession(res['user'], res['token'])

          //this.router.navigate(['/photos'])
        },
        err => console.log(err)
       );
    /* */
  }

}
