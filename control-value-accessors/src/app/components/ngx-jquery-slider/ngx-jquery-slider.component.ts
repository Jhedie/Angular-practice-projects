import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-ngx-jquery-slider',
  templateUrl: './ngx-jquery-slider.component.html',
  styleUrls: ['./ngx-jquery-slider.component.scss'],
})
export class NgxJquerySliderComponent implements AfterViewInit {
  @ViewChild('location') location: any;
  widget: any;

  constructor() {}
  ngAfterViewInit(): void {
    this.widget = $(this.location.nativeElement).slider();
  }
}
