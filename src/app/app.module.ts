import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { LocationModule } from './location/location.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FlexLayoutModule, BrowserAnimationsModule, SharedModule, CoreModule, HomeModule, AppRoutingModule, LocationModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
