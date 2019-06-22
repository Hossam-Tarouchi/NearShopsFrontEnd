import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private cookieService: CookieService, private route: Router, private userService: UserService) { }
  ngOnInit() {
  }
  logout() {
    this.userService.Logout().subscribe();
    this.cookieService.deleteAll();
    this.route.navigate(['']);
  }

}
