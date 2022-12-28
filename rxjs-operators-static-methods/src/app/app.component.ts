import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Working with RxJs operators using static methods';
  subscription: any;
  startStream() {
    throw new Error('Method not implemented.');
  }
  stopStream() {
    throw new Error('Method not implemented.');
  }
}
