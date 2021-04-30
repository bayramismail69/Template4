import { AuthService } from './../../CommonService/auth.service';
import { SessionStorageService } from './../../CommonService/session-storage.service';
import { LocalStorageService } from './../../CommonService/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-navbar',
  templateUrl: './login-navbar.component.html',
  styleUrls: ['./login-navbar.component.css'],
})
export class LoginNavbarComponent implements OnInit {
  token: string = null;
  userName: string = null;
  constructor(
    private localStorageService: LocalStorageService,
    private sessionStorageService: SessionStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getToken();
  }
  getToken() {
    this.authService.setClaims();
    if (this.localStorageService.getToken() !== null) {
      this.token = this.localStorageService.getToken();
      this.userName = this.authService.getUserName();
    } else if (this.sessionStorageService.getToken()) {
      this.token = this.sessionStorageService.getToken();
      this.userName = this.authService.getUserName();
    }
  }
  logOut() {
    this.authService.logOut();
  }
}
