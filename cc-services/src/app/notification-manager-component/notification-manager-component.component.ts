import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-manager-component',
  templateUrl: './notification-manager-component.component.html',
  styleUrls: ['./notification-manager-component.component.scss'],
})
export class NotificationManagerComponentComponent {
  @Input('notificationsCount') count = 0;

  addNotification() {
    this.count++;
  }
  removeNotification() {
    if (this.count > 0) {
      this.count--;
    }
  }
  resetNotification() {
    this.count = 0;
  }
}
