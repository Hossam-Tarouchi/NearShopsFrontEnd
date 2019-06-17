import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopsComponent} from './shops/shops.component';
import {IndexComponent} from './index/index.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'shops', component: ShopsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
