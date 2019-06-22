import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  token: null;
  decodedToken;

  constructor(private cookieService: CookieService, private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.username, this.password).subscribe(data => {
      this.token = data.token;
      if (this.token != null){
        this.cookieService.set('token', this.token);
        this.decodedToken = this.getDecodedAccessToken(this.token);
        this.cookieService.set('userId', this.decodedToken['id']);
        this.cookieService.set('username', this.decodedToken['username']);
        this.router.navigate(['/shops']);
      }
    });
  }
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
}
