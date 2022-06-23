import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideOutComponent } from './animations/slide-out/slide-out.component';
import { BouncingComponent } from './animations/bouncing/bouncing.component';
import { ShakeComponent } from './animations/shake/shake.component';

@NgModule({
  declarations: [AppComponent, SlideOutComponent, BouncingComponent, ShakeComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
