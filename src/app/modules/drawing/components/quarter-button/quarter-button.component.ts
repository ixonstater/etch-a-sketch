import { Component, OnInit, Input } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'quarter-button',
  templateUrl: './quarter-button.component.html',
  styleUrls: ['./quarter-button.component.scss']
})
export class QuarterButtonComponent implements OnInit {

  constructor() { }
  @Input () rotation: string;
  ngOnInit() {
    
  }

  setRotation(){
    return `rotate(${this.rotation})`
  }

}
