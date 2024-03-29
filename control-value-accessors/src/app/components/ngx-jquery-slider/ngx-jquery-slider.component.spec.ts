import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxJquerySliderComponent } from './ngx-jquery-slider.component';

describe('NgxJquerySliderComponent', () => {
  let component: NgxJquerySliderComponent;
  let fixture: ComponentFixture<NgxJquerySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxJquerySliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxJquerySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
