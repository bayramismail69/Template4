import { SessionStorageService } from './../../CommonService/session-storage.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginUser } from 'src/app/CommonModel/login/login-user';
import { AuthService } from 'src/app/CommonService/auth.service';
import { LocalStorageService } from 'src/app/CommonService/local-storage.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  username:string="";
  loginUser:LoginUser=new LoginUser();
  // langugelookUp:LookUp[];
  constructor(private auth:AuthService,
    private storageService:LocalStorageService,
    private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.loginUser.remberMe=true;
    this.username=this.auth.userName;
  }
  getUserName(){
    return this.username;

  }

  login(){
    console.log(this.loginUser)
    this.auth.login(this.loginUser);

  }

  logOut(){
      this.storageService.removeToken();
      this.storageService.removeItem("lang");
  }

  changeLang(lang){  
    localStorage.setItem("lang",lang);
    // this.translateService.use(lang);
  }
}
