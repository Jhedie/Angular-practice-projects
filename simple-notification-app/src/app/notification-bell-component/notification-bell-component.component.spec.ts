import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationBellComponentComponent } from './notification-bell-component.component';

describe('NotificationBellComponentComponent', () => {
  let component: NotificationBellComponentComponent;
  let fixture: ComponentFixture<NotificationBellComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationBellComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationBellComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
