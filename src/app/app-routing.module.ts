import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopsComponent} from './shops/shops.component';
import {IndexComponent} from './index/index.component';
import {AuthGuard} from './auth.guard';
import {LikedShopsComponent} from './liked-shops/liked-shops.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'shops', component: ShopsComponent, canActivate: [AuthGuard]},
  {path: 'likedshops', component: LikedShopsComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
