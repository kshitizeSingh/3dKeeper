import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  visibleSidebar1
  constructor() { }

  ngOnInit() {
  }

  closeSidebar(event){
    this.visibleSidebar1=!event
  }

}
