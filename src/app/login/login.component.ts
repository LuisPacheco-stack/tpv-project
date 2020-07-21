import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  user: string;
  password: string;
  constructor(public userService: UsersService, public router: Router) { }

  login() {
    const user = { user: this.user, password: this.password };
    this.userService.login(user).subscribe(
      data => {
        this.userService.setToken(data.token);
        this.router.navigateByUrl('/home');
      }
    )}

    register() {
      console.log('navegacion');
      this.router.navigateByUrl('/createAccount');
    }

}
