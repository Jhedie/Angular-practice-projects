import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Working with RxJS operators using instance methods';
  subscription: Subscription | null = null;
  bookStreamData: String[] = [
    'The Great Gatsby',
    'The Lord of the Rings',
    'War and Peace',
    'Alices Adventures in Wonderland',
  ];
  moviesStreamData: String[] = [
    'Avatar: The Way of Water (2022)',
    'The Matrix (1999)',
    'The Lord of the Rings (2001)',
  ];
  outputStreamData: Number[] = [];

  startStream() {
    const streamSource = interval(2000);
    const moviesStream = interval(3000).pipe();
    this.subscription = streamSource.subscribe((element) =>
      this.outputStreamData.push(element)
    );
  }

  stopStream() {
    this.subscription?.unsubscribe();
    this.subscription = null;
  }
}
