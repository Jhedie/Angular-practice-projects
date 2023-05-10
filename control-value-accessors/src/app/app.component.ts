import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'control-value-accessors';
  sliderValue: any = 50;

  onSliderValueChange($event: any) {
    console.log('$event', $event);
    this.sliderValue = $event;
  }
}
