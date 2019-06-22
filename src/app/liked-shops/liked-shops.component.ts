import { Component, OnInit } from '@angular/core';
import {Shop} from '../shop';
import {ShopsComponent} from '../shops/shops.component';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-liked-shops',
  templateUrl: './liked-shops.component.html',
  styleUrls: ['./liked-shops.component.css']
})
export class LikedShopsComponent implements OnInit {
  LikedShops: Shop[];
  constructor(private shopComp: ShopsComponent, private cookieService: CookieService) { }


  ngOnInit() {
    this.LikedShops = JSON.parse(this.cookieService.get('likedShops'));
  }

  RemoveFromFavoriteList(shop: Shop) {
    const index = this.LikedShops.indexOf(shop, 0);
    if (index > -1) {
      this.LikedShops.splice(index, 1);
    }
    this.cookieService.set('likedShops', JSON.stringify(this.LikedShops));
    console.log(JSON.parse(this.cookieService.get('likedShops')));
  }


}
