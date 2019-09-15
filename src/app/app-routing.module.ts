import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsScreenComponent } from './modules/settings/pages/settings-screen/settings-screen.component'
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component'
import { DrawingScreenComponent } from './modules/drawing/pages/drawing-screen/drawing-screen.component'

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'settings', component: SettingsScreenComponent},
  {path: 'drawing', component: DrawingScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
