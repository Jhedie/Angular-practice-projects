import { Component } from '@angular/core';
import { interval, map, mergeScan, mergeWith, Subscription, tap } from 'rxjs';

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
  outputStreamData: String[] = [];

  startStream() {
    const streamSource = interval(1000);
    const moviesStreamSource = interval(2000).pipe(
      map((value) => value % this.moviesStreamData.length),
      map((index) => this.moviesStreamData[index])
    );
    this.subscription = streamSource
      .pipe(
        map((value) => value % this.bookStreamData.length),
        map((index) => this.bookStreamData[index]),
        mergeWith(moviesStreamSource),
        tap((element) => this.outputStreamData.push(element))
      )
      .subscribe();
  }

  stopStream() {
    this.subscription?.unsubscribe();
    this.subscription = null;
  }
}
