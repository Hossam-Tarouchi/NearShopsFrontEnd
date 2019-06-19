import { Component, OnInit } from '@angular/core';
import {LIKEDSHOPS, Shop} from '../shop';

@Component({
  selector: 'app-liked-shops',
  templateUrl: './liked-shops.component.html',
  styleUrls: ['./liked-shops.component.css']
})
export class LikedShopsComponent implements OnInit {
  LikedShops: Shop[] = LIKEDSHOPS;
  constructor() { }

  ngOnInit() {
  }


}
