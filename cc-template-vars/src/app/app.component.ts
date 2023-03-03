import { Component } from '@angular/core';
import { GalleryComponent } from './components/gallery/gallery.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cc-template-vars';
  // With the template reference variable I am able to reference the gallery component methods and other properties
  addNewPicture(gallery: GalleryComponent) {
    gallery.pictures.unshift(gallery.generateImage());
    console.log('added new picture');
  }

  removeFirstPicture(gallery: GalleryComponent) {
    gallery.pictures.shift();
    console.log('removed first picture');
  }
}
