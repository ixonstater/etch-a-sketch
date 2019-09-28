import { Component, OnInit , ViewChild, ElementRef, Inject} from '@angular/core';
import DataModel from '../../../../shared/data-model.service'
import Drawing from './drawing'

@Component({
  selector: 'app-drawing-screen',
  templateUrl: './drawing-screen.component.html',
  styleUrls: ['./drawing-screen.component.scss']
})
export class DrawingScreenComponent implements OnInit {
  hasTouch: boolean
  up: boolean
  down: boolean
  left: boolean
  right: boolean
  context: CanvasRenderingContext2D
  loopInterval: NodeJS.Timer
  canvasHeight: number
  canvasWidth:  number
  drawing: Drawing
  dataModel: DataModel

  constructor(DataModel: DataModel) {
    this.dataModel = DataModel
  }

  @ViewChild('myCanvas', {read: ElementRef, static: true}) myCanvas: ElementRef
  ngOnInit() {
    this.hasTouch = false
    this.up = false
    this.down = false
    this.left = false
    this.right = false
    this.canvasHeight = window.innerHeight * 2
    this.canvasWidth = window.innerWidth * 2
    this.drawing = new Drawing(this.canvasWidth, this.canvasHeight)
    this.getContext()
  }

  ngAfterContentInit(){
    
  }

  ngOnDestroy(){
    clearInterval(this.loopInterval)
  }

  getContext(){
    this.myCanvas.nativeElement.children[0].width = window.innerWidth * 2
    this.myCanvas.nativeElement.children[0].height = window.innerHeight * 2
    this.context = this.myCanvas.nativeElement.children[0].getContext('2d')
    this.context.fillStyle = 'black'
    this.context.lineWidth = 10
    this.context.beginPath()
    this.context.moveTo(this.canvasWidth / 2, this.canvasHeight / 2)
  }

  startTouchLeft(){
    if(!this.hasTouch){
      this.startDraw()
      this.hasTouch = true
    }
    this.left = true
  }

  startTouchRight(){
    if(!this.hasTouch){
      this.startDraw()
      this.hasTouch = true
    }
    this.right = true
  }

  startTouchUp(){
    if(!this.hasTouch){
      this.startDraw()
      this.hasTouch = true
    }
    this.up = true
  }

  startTouchDown(){
    if(!this.hasTouch){
      this.startDraw()
      this.hasTouch = true
    }
    this.down = true
  }

  endTouchLeft(){
    if(this.right == false && this.up == false && this.down == false){
      this.hasTouch = false
      this.stopDraw()
    }
    this.left = false
  }

  endTouchRight(){
    if(this.left == false && this.up == false && this.down == false){
      this.hasTouch = false
      this.stopDraw()
    }
    this.right = false
  }

  endTouchUp(){
    if(this.right == false && this.left == false && this.down == false){
      this.hasTouch = false
      this.stopDraw()
    }
    this.up = false
  }

  endTouchDown(){
    if(this.right == false && this.up == false && this.left == false){
      this.hasTouch = false
      this.stopDraw()
    }
    this.down = false
  }

  drawLoop(){
    this.drawing.iterate([this.up, this.down, this.left, this.right])
    this.drawing.draw(this.context)
  }

  startDraw(){
    let drawLoop = this.drawLoop.bind(this)
    this.loopInterval = setInterval(drawLoop, 15)
  }

  stopDraw(){
    clearInterval(this.loopInterval)
  }
}
