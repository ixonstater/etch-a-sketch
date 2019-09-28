import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SettingsModule } from './modules/settings/settings.module'
import { DrawingModule } from './modules/drawing/drawing.module'
import { HomeModule } from './modules/home/home.module'
import { AppComponent } from './app.component';
import DataModel from './shared/data-model.service'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SettingsModule,
    DrawingModule,
    HomeModule
  ],
  providers: [
    DataModel
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
