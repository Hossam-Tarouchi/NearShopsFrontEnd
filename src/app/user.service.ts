import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Shop} from './shop';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private Http: HttpClient, private cookies: CookieService) { }

  getShops(): Observable<Shop[]> {
    const headers = new HttpHeaders({Authorization: 'Bearer ' + this.cookies.get('token')});
    return this.Http.get<Shop[]>('http://127.0.0.1:8000/api/shops/' + this.cookies.get('userId'), {headers});
  }
  getLikedShops(): Observable<Shop[]> {
    const headers = new HttpHeaders({Authorization: 'Bearer ' + this.cookies.get('token')});
    return this.Http.get<Shop[]>('http://127.0.0.1:8000/api/shopslikeds/' + this.cookies.get('userId'), {headers});
  }

  login(usrname: string, passwrd: string): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('content-type', 'application/x-www-form-urlencoded');
    return this.Http.post<any>('http://127.0.0.1:8000/api/login_check',{
      username: usrname,
      password: passwrd
    }, {headers});
  }

  Logout(): Observable<string> {
    const headers = new HttpHeaders({Authorization: 'Bearer ' + this.cookies.get('token')});
    return this.Http.post<string>('http://127.0.0.1:8000/api/logout', {
      likedShops: JSON.parse(this.cookies.get('likedShops'))
    }, {headers});
  }
}
