import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-userthme-product-recommendations-top',
  templateUrl: './userthme-product-recommendations-top.component.html',
  styleUrls: ['./userthme-product-recommendations-top.component.css'],
})
export class UserthmeProductRecommendationsTopComponent implements OnInit {
  constructor() {}

  time: number = 1;
  interval;

  startTimer() {
    this.interval = setInterval(() => {
      this.time++;
      if (this.time >= 4) {
        this.time = 1;
      }
    }, 6000);
  }
  getCarouselClass(carosuelItemId: number) {
    if (this.time === carosuelItemId) {
      return 'carousel-item  active';
    } else {
      return 'carousel-item';
    }
  }
  getCarouselIndicatorsClass(carosuelItemId: number) {
    if (this.time === carosuelItemId) {
      return ' active';
    } else {
      return '';
    }
  }
  ngOnInit(): void {
    this.startTimer();
  }
}
