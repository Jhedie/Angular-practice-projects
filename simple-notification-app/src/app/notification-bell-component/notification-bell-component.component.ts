import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-bell-component',
  templateUrl: './notification-bell-component.component.html',
  styleUrls: ['./notification-bell-component.component.scss'],
})
export class NotificationBellComponentComponent implements OnInit {
  @Input() count = 0;
  
  constructor() {}

  ngOnInit(): void {}
}
