import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserthmeProductRecommendationsTopComponent } from './userthme-product-recommendations-top.component';

describe('UserthmeProductRecommendationsTopComponent', () => {
  let component: UserthmeProductRecommendationsTopComponent;
  let fixture: ComponentFixture<UserthmeProductRecommendationsTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserthmeProductRecommendationsTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserthmeProductRecommendationsTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
