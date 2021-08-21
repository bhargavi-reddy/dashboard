import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarToggle = true;
  constructor() { }

  ngOnInit(): void {}

  SideBarToggler(value){
    console.log("*** sideBarToggle **** " + this.sideBarToggle )
    this.sideBarToggle = !this.sideBarToggle
  }
}
