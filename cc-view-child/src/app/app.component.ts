import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { GalleryComponent } from './components/gallery/gallery.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cc-view-child';
  /*

    1. ViewChild is a decorator that the angular/core package provides out the box
    2. It configures a 'view query' for the Angular change detector

    */
  @ViewChild(GalleryComponent) gallery: GalleryComponent;

  addNewPicture() {
    console.log('added new picture');
    this.gallery.pictures.unshift(this.gallery.generateImage());
  }

  removeFirstPicture() {
    console.log('removed first picture');
    this.gallery.pictures.shift();
  }
}
