import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// import the jquery $ so all sub components can recognize it 
import * as $ from "jquery";
import { AppRoutingModule } from './app-routing.module';
import { DigitalClockComponent } from './components/digital-clock/digital-clock.component';
import { FlagComponent } from './components/flag/flag.component';
import { UserOptionsComponent } from './components/user-options/user-options.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DigitalClockComponent,
    FlagComponent,
    UserOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){

  }
}
