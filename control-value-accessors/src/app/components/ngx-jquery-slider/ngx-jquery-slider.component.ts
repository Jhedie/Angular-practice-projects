import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-ngx-jquery-slider',
  templateUrl: './ngx-jquery-slider.component.html',
  styleUrls: ['./ngx-jquery-slider.component.scss'],
})
export class NgxJquerySliderComponent implements AfterViewInit {
  @ViewChild('location') location: any;
  @Input() value: any;
  @Output() private valueChange: EventEmitter<any> = new EventEmitter();
  widget: any;

  constructor() {}
  ngAfterViewInit(): void {
    this.widget = $(this.location.nativeElement).slider();
    //this sets the widget to the value passed in when the component view is initialized
    this.widget.slider('value', this.value);
    // after action slidestop-when the user stops moving the slider, emit the new value
    this.widget.on('slidestop', (event: any, ui: { value: any }) => {
      this.valueChange.emit(ui.value);
    });
  }

  ngOnChanges() {
    //if the widget exists and the value is not equal to the value of the widget, set the value of the widget
    if (this.widget && this.widget.slider('value') !== this.value) {
      this.widget.slider('value', this.value);
    }
  }
}
