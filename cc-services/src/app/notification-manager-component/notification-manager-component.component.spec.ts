import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationManagerComponentComponent } from './notification-manager-component.component';

describe('NotificationManagerComponentComponent', () => {
  let component: NotificationManagerComponentComponent;
  let fixture: ComponentFixture<NotificationManagerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationManagerComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationManagerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
