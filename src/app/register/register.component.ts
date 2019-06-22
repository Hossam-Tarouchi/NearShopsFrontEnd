import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  userPassword: string;
  userEmail: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  register() {
    this.userService.register(this.username, this.userPassword).subscribe();
  }
}
