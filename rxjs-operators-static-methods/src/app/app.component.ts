import { Component } from '@angular/core';
import { interval, map, tap } from 'rxjs';

interface streamData {
  type: string;
  title: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Working with RxJs operators using static methods';
  subscription: any;
  outputStream: streamData[] = [];
  combinedStreamData: streamData[] = [
    {
      type: 'country',
      title: 'India',
    },
    {
      type: 'bird',
      title: 'Peacock',
    },
    {
      type: 'country',
      title: 'Japan',
    },
    {
      type: 'bird',
      title: 'Eagle',
    },
    {
      type: 'bird',
      title: 'Penguin',
    },
    {
      type: 'country',
      title: 'France',
    },
  ];

  startStream() {
    const streamSource = interval(3000).pipe(
      map((input) => {
        const index = input % this.combinedStreamData.length;
        return this.combinedStreamData[index];
      })
    );
    this.subscription = streamSource
      .pipe(tap((value) => this.outputStream.push(value)))
      .subscribe();
  }
  stopStream() {
    this.subscription.unsubscribe();
    this.subscription = null;
  }
}
