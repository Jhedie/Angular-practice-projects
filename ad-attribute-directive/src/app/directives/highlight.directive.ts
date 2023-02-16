import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnChanges {
  @Input() highlightText = '';
  @Input() hightlightColor = 'yellow';
  originalHTML: string = '';

  constructor(private el: ElementRef) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.highlightText.firstChange) {
      this.originalHTML = this.el.nativeElement.innerHTML;
      return;
    }
    const { currentValue } = changes.highlightText;
    if (currentValue) {
      const regExp = new RegExp(`(${currentValue})`, 'gi');
      this.el.nativeElement.innerHTML = this.originalHTML.replace(
        regExp,
        `<span style="background-color: ${this.hightlightColor}">\$1</span>`
      );
    } else {
      this.el.nativeElement.innerHTML = this.originalHTML;
    }
  }
}
