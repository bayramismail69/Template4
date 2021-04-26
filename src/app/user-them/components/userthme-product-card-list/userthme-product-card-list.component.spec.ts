import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserthmeProductCardListComponent } from './userthme-product-card-list.component';

describe('UserthmeProductCardListComponent', () => {
  let component: UserthmeProductCardListComponent;
  let fixture: ComponentFixture<UserthmeProductCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserthmeProductCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserthmeProductCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
