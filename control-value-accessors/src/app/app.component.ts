import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ctrl: FormControl<any> = new FormControl(50);

  updateSlider($event: any) {
    this.ctrl.setValue($event.currentTarget.value, {
      emitModelToViewChange: true,
    });
  }

  title = 'control-value-accessors';
}
