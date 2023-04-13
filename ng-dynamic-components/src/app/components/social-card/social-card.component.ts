import {
  Component,
  OnInit,
  Input,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { SocialCardType } from 'src/app/constants/social-card-type';
import { FbCardComponent } from '../fb-card/fb-card.component';
import { TwitterCardComponent } from '../twitter-card/twitter-card.component';

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.scss'],
})
export class SocialCardComponent implements OnChanges {
  @Input() type: SocialCardType;
  cardTypes = SocialCardType;

  @ViewChild('vrf', { read: ViewContainerRef }) vrf: ViewContainerRef;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.type.currentValue !== undefined) {
      console.log(`card type changed to: ', ${changes.type.currentValue}`);
      console.log('changes :>> ', changes);
      this.loadDynamicComponent(changes.type.currentValue);
    }
  }
  loadDynamicComponent(type) {
    let component;
    switch (type) {
      case SocialCardType.Facebook:
        component = FbCardComponent;
        break;
      case SocialCardType.Twitter:
        component = TwitterCardComponent;
        break;
    }

    // resolveComponentFactory is deprecated and no longer required: https://thedukh.com/2022/05/dynamic-components-in-angular/
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(component);
    this.vrf.clear();
    this.vrf.createComponent(componentFactory);
  }
}
