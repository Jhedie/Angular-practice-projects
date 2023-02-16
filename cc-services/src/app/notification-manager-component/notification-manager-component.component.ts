import { Component, OnInit } from '@angular/core';
import { count, first, Observable } from 'rxjs';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-notification-manager-component',
  templateUrl: './notification-manager-component.component.html',
  styleUrls: ['./notification-manager-component.component.scss'],
})
export class NotificationManagerComponentComponent implements OnInit {
  notificationsCount$!: Observable<number>;

  constructor(private notificationService: NotificationsService) {}
  ngOnInit(): void {
    this.notificationsCount$ = this.notificationService.count$;
  }

  getCountValue(callback: any) {
    this.notificationsCount$.pipe(first()).subscribe(callback);
  }
  addNotification() {
    this.getCountValue((countVal: number) => {
      this.notificationService.setCount(++countVal);
    });
  }
  removeNotification() {
    this.getCountValue((countVal: number) => {
      if (countVal > 0) {
        this.notificationService.setCount(--countVal);
      } else {
        alert('Cannot reduce count');
      }
    });
  }
  resetNotification() {
    this.notificationService.setCount(0);
  }
}
