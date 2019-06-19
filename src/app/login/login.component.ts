import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.cookieService.set('loggedIn', 'true');
      this.router.navigate(['/shops']);
    }
  }
}
