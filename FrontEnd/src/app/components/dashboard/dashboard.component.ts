import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
    document.getElementsByTagName('app-dashboard')[0].classList.add('layout-row');
  }
}
