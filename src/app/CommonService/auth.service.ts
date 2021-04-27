import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { LoginUser } from '../CommonModel/login/login-user';
import { TokenModel } from '../CommonModel/login/token-model';
import { AlertifyService } from './alertify.service';
import { LocalStorageService } from './local-storage.service';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userName: string;
  isLoggin: boolean;
  decodedToken: any;
  userToken: string;
  jwtHelper: JwtHelperService = new JwtHelperService();
  claims: string[];

  constructor(
    private httpClient: HttpClient,
    private storageService: LocalStorageService,
    private sessionStorageService:SessionStorageService,
    private router: Router,
    private alertifyService: AlertifyService
  ) {}

  login(loginUser: LoginUser) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    this.httpClient
      .post<TokenModel>(environment.getApiUrl + '/Auth/login', loginUser, {
        headers: headers,
      })
      .subscribe((data) => {
        if (data.success) {
          if(loginUser.remberMe===true){
            this.storageService.setToken(data.data.token);
            this.claims = data.data.claims;

            var decode = this.jwtHelper.decodeToken(
              this.storageService.getToken()
            );
          }
          else
          {
           this.sessionStorageService.setToken(data.data.token);
           var decode = this.jwtHelper.decodeToken(
            this.sessionStorageService.getToken()
          );
          }
          
        

          var propUserName = Object.keys(decode).filter((x) =>
            x.endsWith('/name')
          )[0];
          this.userName = decode[propUserName];
          // this.sharedService.sendChangeUserNameEvent();
            console.log(decode,this.userName,propUserName);
          // this.router.navigateByUrl('/dashboard');
          this.alertifyService.success("Hos Geldiniz "+this.userName);
        } else {
          this.alertifyService.warning(data.message);
        }
      },responseError=>{
        console.log(responseError);
        this.alertifyService.error(responseError.error);
      });
  }

  logOut() {
    this.storageService.removeToken();
    this.storageService.removeItem('lang');
    this.claims = [];
  }
  getUserName(): string {
    return this.userName;
  }
  loggedIn(): boolean {
    let isExpired = this.jwtHelper.isTokenExpired(
      this.storageService.getToken()
    );
    return !isExpired;
  }

  setClaims() {
    if (
      (this.claims == undefined || this.claims.length == 0) &&
      this.storageService.getToken() != null &&
      this.loggedIn()
    ) {
      this.httpClient
        .get<string[]>(
          environment.getApiUrl + '/OperationClaims/getuserclaimsfromcache'
        )
        .subscribe((data) => {
          this.claims = data;
        });

      var token = this.storageService.getToken();
      var decode = this.jwtHelper.decodeToken(token);

      var propUserName = Object.keys(decode).filter((x) =>
        x.endsWith('/name')
      )[0];
      this.userName = decode[propUserName];
    }
  }
  getCurrentUserId() {
    this.jwtHelper.decodeToken(this.storageService.getToken()).userId;
  }

  claimGuard(claim: string): boolean {
    var check = this.claims.some(function (item) {
      return item == claim;
    });

    return check;
  }
}
