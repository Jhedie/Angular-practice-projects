import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() color!: string;
  constructor(private element: ElementRef) {}

  @HostListener('mouseover')
  addHighlight() {
    this.element.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseout')
  removeHighlight() {
    this.element.nativeElement.style.backgroundColor = null;
  }
}
