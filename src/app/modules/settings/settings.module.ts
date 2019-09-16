import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsScreenComponent } from './pages/settings-screen/settings-screen.component';



@NgModule({
  declarations: [SettingsScreenComponent],
  imports: [
    CommonModule
  ],
  exports:[
    SettingsScreenComponent
  ]
})
export class SettingsModule { }
