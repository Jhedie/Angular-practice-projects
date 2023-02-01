import { Component } from '@angular/core';
import { interval, map, merge, partition, tap } from 'rxjs';

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
  birds: string[] = [];
  countries: string[] = [];

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
    const streamSource = interval(2000).pipe(
      map((input) => {
        const index = input % this.combinedStreamData.length;
        return this.combinedStreamData[index];
      })
    );
    const [birdsStream, countriesStream] = partition(
      streamSource,
      (item) => item.type === 'bird'
    );
    this.subscription = merge(
      countriesStream.pipe(
        tap((country) => this.countries.push(country.title))
      ),
      birdsStream.pipe(tap((bird) => this.birds.push(bird.title)))
    ).subscribe();
  }
  stopStream() {
    this.subscription.unsubscribe();
    this.subscription = null;
  }
}
