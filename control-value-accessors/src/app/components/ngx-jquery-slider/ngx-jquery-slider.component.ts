import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

declare const $: any;

type OnChangeFn<T> = (value: T) => void;
type OnTouchedFn = () => void;

@Component({
  selector: 'app-ngx-jquery-slider',
  templateUrl: './ngx-jquery-slider.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NgxJquerySliderComponent,
      multi: true,
    },
  ],
  styleUrls: ['./ngx-jquery-slider.component.scss'],
})
export class NgxJquerySliderComponent
  implements AfterViewInit, ControlValueAccessor
{
  @ViewChild('location') location: any;
  value: number | undefined;
  // @Output() private valueChange: EventEmitter<any> = new EventEmitter();
  widget: any;
  onChange: OnChangeFn<number> = () => {};

  constructor() {}

  //after the view is initialized, create the widget
  ngAfterViewInit(): void {
    this.widget = $(this.location.nativeElement).slider();
    // set the initial value
    this.widget.slider('value', this.value);
    // after action slidestop-when the user stops moving the slider, emit the new value
    this.widget.on('slidestop', (event: any, ui: { value: number }) => {
      this.onChange(ui.value);
    });
  }

  // start of control value accessor methods

  // Get the value of the slider widget
  writeValue(value: number): void {
    this.value = value;
    if (this.widget && value) {
      this.widget.slider('value', value);
    }
  }
  registerOnChange(fn: OnChangeFn<number>): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: OnTouchedFn): void {}

  // optional method
  setDisabledState?(isDisabled: boolean): void {}
  //end of ontrol value accessor methods
}
