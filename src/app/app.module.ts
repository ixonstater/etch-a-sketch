import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsScreenComponent } from './modules/settings/pages/settings-screen/settings-screen.component'
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component'
import { DrawingScreenComponent } from './modules/drawing/pages/drawing-screen/drawing-screen.component'


@NgModule({
  declarations: [
    AppComponent,
    SettingsScreenComponent,
    HomePageComponent,
    DrawingScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
