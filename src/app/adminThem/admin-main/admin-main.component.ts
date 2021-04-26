import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css'],
})
export class AdminMainComponent implements OnInit {
  clickSearch: boolean = false;
 
  ngOnInit(): void {
    this.searchDivClass();
  }

  searchDivClass() {
    if (this.clickSearch == false) {
      return 'form-group mb-0';
    } else {
      return 'form-group mb-0 focused';
    }
  }
 
  searchClick() {
    this.clickSearch = true;
  }
  searchFocusOut() {
    this.clickSearch = false;
  }
}
