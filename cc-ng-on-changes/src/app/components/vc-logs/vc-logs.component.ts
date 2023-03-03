import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.scss'],
})
export class VcLogsComponent implements OnChanges {
  @Input() vName;
  @Input() testInput;
  ngOnChanges(changes: SimpleChanges): void {
    /*
      The changes parameter is an object showing all inputs that are passed into the component. Each input item has
      currentValue, second input,firstChange
    */
    //uncomment the below to see the changes object
    //console.log(changes);

    const currValue = changes.vName.currentValue;
    if (changes.vName.isFirstChange()) {
      this.logs.push(`initial version is ${currValue.trim()}`);
    } else {
      this.logs.push(`version changed to ${currValue.trim()}`);
    }
  }
  logs: string[] = [];
}
