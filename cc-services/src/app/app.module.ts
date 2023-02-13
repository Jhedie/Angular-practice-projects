import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotificationManagerComponentComponent } from './notification-manager-component/notification-manager-component.component';
import { NotificationBellComponentComponent } from './notification-bell-component/notification-bell-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationManagerComponentComponent,
    NotificationBellComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
