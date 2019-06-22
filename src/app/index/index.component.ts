import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit() {
    if (this.cookieService.check('token')){
      this.router.navigate(['/shops']);
    }
  }

}
