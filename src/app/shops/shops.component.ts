import { Component, OnInit } from '@angular/core';
import {Shop} from '../shop';
import {UserService} from '../user.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {

  Shops: Shop[] = null;
  LikedShops: Shop[];

  constructor(private userService: UserService, private cookieService: CookieService) { }

  ngOnInit() {

    this.userService.getLikedShops().subscribe(data => {
      this.LikedShops = data ;
      if (!this.cookieService.check('likedShops')) {
        this.cookieService.set('likedShops', JSON.stringify(this.LikedShops));
      } else {
        this.LikedShops = JSON.parse(this.cookieService.get('likedShops'));
      }
    });

    this.userService.getShops().subscribe(data => {
      this.Shops = data ;
      if (!this.cookieService.check('Shops')) {
        this.cookieService.set('Shops', JSON.stringify(this.Shops));
      } else {
        this.Shops = JSON.parse(this.cookieService.get('Shops'));
      }
    });
  }
  checkIfInLikedList(shop: Shop) {
    return JSON.stringify(this.LikedShops).includes(JSON.stringify(shop));
  }
  AddToFavoriteList(shop: Shop) {
    this.LikedShops.push(shop);
    this.cookieService.set('likedShops', JSON.stringify(this.LikedShops));
  }

}
