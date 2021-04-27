import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }
  setToken(token: string) {
    sessionStorage.setItem("token", token);
  }

  removeToken(){
    sessionStorage.removeItem("token");
  }

  removeItem(itemName:string)
  {
    sessionStorage.removeItem(itemName);
  }

  getToken():string {
    return sessionStorage.getItem("token");
    
  }

  setItem(key:string,data:any){
    sessionStorage.setItem(key,data);
  }

  getItem(key:string){
    return sessionStorage.getItem(key);
  }
}
