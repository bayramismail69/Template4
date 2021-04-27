import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './adminThem/components/top-navbar/top-navbar.component';
import { LeftNavbarComponent } from './adminThem/components/left-navbar/left-navbar.component';
import { LoginFormComponent } from './CommonComponents/login-form/login-form.component';
import { AdminMainComponent } from './adminThem/admin-main/admin-main.component';
import { UserMainComponent } from './user-them/user-main/user-main.component';
import { SearchFormComponent } from './user-them/components/search-form/search-form.component';
import { UserTopNavComponent } from './user-them/components/user-top-nav/user-top-nav.component';
import { UserthmeProductRecommendationsTopComponent } from './user-them/components/userthme-product-recommendations-top/userthme-product-recommendations-top.component';
import { UserthmeProductCardListComponent } from './user-them/components/userthme-product-card-list/userthme-product-card-list.component';
import { LoginNavbarComponent } from './CommonComponents/login-navbar/login-navbar.component';
import { RegisterFormComponent } from './CommonComponents/register-form/register-form.component';


import { JwtModule } from "@auth0/angular-jwt";
import { AlertifyService } from './CommonService/alertify.service';
import { AuthService } from './CommonService/auth.service';
import { LocalStorageService } from './CommonService/local-storage.service';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    LeftNavbarComponent,
    LoginNavbarComponent,
    RegisterFormComponent,
    LoginFormComponent,
    AdminMainComponent,
    UserMainComponent,
    SearchFormComponent,
    UserTopNavComponent,
    UserthmeProductRecommendationsTopComponent,
    UserthmeProductCardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    }),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [AlertifyService, AuthService, LocalStorageService,  HttpClient
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
