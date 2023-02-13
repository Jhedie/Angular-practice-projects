import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationBellComponentComponent } from './notification-bell-component/notification-bell-component.component';
import { NotificationManagerComponentComponent } from './notification-manager-component/notification-manager-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationBellComponentComponent,
    NotificationManagerComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
