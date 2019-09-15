import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-settings-screen',
  templateUrl: './settings-screen.component.html',
  styleUrls: ['./settings-screen.component.scss']
})
export class SettingsScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toHome(){
    this.router.navigateByUrl('/')
  }

}
