import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private cookieService: CookieService, private route: Router) { }
  username = this.cookieService.get('username');
  ngOnInit() {
  }
  logout() {
    this.cookieService.deleteAll();
    this.route.navigate(['']);
  }

}
