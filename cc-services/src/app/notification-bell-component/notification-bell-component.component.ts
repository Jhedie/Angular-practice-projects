import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-notification-bell-component',
  templateUrl: './notification-bell-component.component.html',
  styleUrls: ['./notification-bell-component.component.scss'],
})
export class NotificationBellComponentComponent implements OnInit {
  notificationsCount$!: Observable<number>;
  constructor(private notificationsService: NotificationsService) {}

  ngOnInit(): void {
    this.notificationsCount$ = this.notificationsService.count$;
  }
}
