import { Component, OnInit } from '@angular/core';
import {LIKEDSHOPS, Shop, SHOPS} from '../shop';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {
  Shops: Shop[] = SHOPS;
  LikedShops: Shop[] = LIKEDSHOPS;
  constructor() { }

  ngOnInit() {
  }
  checkIfInLikedList(shop: Shop) {
    if (this.LikedShops.find(x => x.ShopId === shop.ShopId)) {
      return true ;
    } else { return false; }
  }
  LikeShop(shop: Shop){
    LIKEDSHOPS.push(shop);
  }

}
