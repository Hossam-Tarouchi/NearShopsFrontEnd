import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShopsComponent } from './shops/shops.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { LikedShopsComponent } from './liked-shops/liked-shops.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ShopsComponent,
    IndexComponent,
    NavbarComponent,
    LikedShopsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ CookieService, UserService, ShopsComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
