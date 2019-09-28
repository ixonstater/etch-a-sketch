import { Component, OnInit } from '@angular/core';
import { Router, Data } from '@angular/router'
import DataModel from '../../../../shared/data-model.service'

@Component({
  selector: 'app-settings-screen',
  templateUrl: './settings-screen.component.html',
  styleUrls: ['./settings-screen.component.scss']
})
export class SettingsScreenComponent implements OnInit {
  dataModel: DataModel

  constructor(private router: Router, private DataModel: DataModel) {
    this.dataModel = DataModel
  }

  ngOnInit() {
    
  }

  toHome(){
    this.router.navigateByUrl('/')
  }

}
