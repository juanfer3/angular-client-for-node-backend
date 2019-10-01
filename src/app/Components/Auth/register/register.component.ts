import { Component, OnInit } from '@angular/core';

import { AuthService } from "../../../Services/Auth/auth.service";

import { User } from "../../../Models/User";

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor( private auth: AuthService ) { }

  ngOnInit() {
  }

  register(name: HTMLInputElement, username:HTMLInputElement, password:HTMLInputElement){
    
    let user: User = {
      name: name.value,
      username: username.value,
      password: password.value
    }
    
    this.auth.register(user)
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
