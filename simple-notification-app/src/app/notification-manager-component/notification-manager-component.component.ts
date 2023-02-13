import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-notification-manager-component',
  templateUrl: './notification-manager-component.component.html',
  styleUrls: ['./notification-manager-component.component.scss'],
})
export class NotificationManagerComponentComponent {
  @Input() count = 0;
  @Output() countChanged = new EventEmitter<number>();
  addNotification() {
    this.count++;
    this.countChanged.emit(this.count);
  }
  removeNotification() {
    if (this.count > 0) {
      this.count--;
      this.countChanged.emit(this.count);
    }
  }
  resetNotification() {
    this.count = 0;
    this.countChanged.emit(this.count);
  }
}
