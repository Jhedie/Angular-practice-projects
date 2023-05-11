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
    console.log('changes.HighlightText', changes.highlightText);

    // SimpleChanges as a parameter, which contains information about the changes to the input properties.

    //when no changes have been made - firstChange is true then store the original html
    if (changes.highlightText.firstChange) {
      this.originalHTML = this.el.nativeElement.innerHTML;
      return;
    }

    const { currentValue } = changes.highlightText;
    console.log('currentValue', currentValue);
    if (currentValue) {
      //g means global, i means case insensitive
      const regExp = new RegExp(`(${currentValue})`, 'gi');
      this.el.nativeElement.innerHTML = this.originalHTML.replace(
        regExp,
        `<span style="background-color: ${this.hightlightColor}">\$1</span>`
      );
    } else {
      // if no value, reset to original html
      this.el.nativeElement.innerHTML = this.originalHTML;
    }
  }
}
