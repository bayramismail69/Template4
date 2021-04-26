import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  clickSearch:boolean=false;
  ngOnInit(): void {
    this.searchDivClass();
  }

  searchDivClass(){
  if(this.clickSearch==false){
    return "form-group mt-1 mb-0"
  }
  else{
    return "form-group mt-1 mb-0 focused"
  }
  }
  searchClick(){
   this.clickSearch=true;
  }
  searchFocusOut(){
    this.clickSearch=false;
   }
}
