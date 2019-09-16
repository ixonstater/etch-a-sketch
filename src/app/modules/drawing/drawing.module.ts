import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawingScreenComponent } from './pages/drawing-screen/drawing-screen.component';
import { QuarterButtonComponent } from './components/quarter-button/quarter-button.component';
import { DrawingCanvasComponent } from './components/drawing-canvas/drawing-canvas.component';


@NgModule({
  declarations: [
    DrawingScreenComponent,
    QuarterButtonComponent,
    DrawingCanvasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    QuarterButtonComponent,
  ]
})
export class DrawingModule { }
