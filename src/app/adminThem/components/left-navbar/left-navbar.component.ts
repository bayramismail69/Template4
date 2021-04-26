import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-navbar',
  templateUrl: './left-navbar.component.html',
  styleUrls: ['./left-navbar.component.css']
})
export class LeftNavbarComponent implements OnInit {

  clickSearch:boolean=false;
  ngOnInit(): void {
    this.searchDivClass();
  }

  searchDivClass(){
  if(this.clickSearch==false){
    return "form-group mb-0"
  }
  else{
    return "form-group mb-0 focused"
  }
  }
  searchClick(){
   this.clickSearch=false;
  }
  searchFocusOut(){
    this.clickSearch=false;
   }
}
