import { Component, OnInit, AfterViewChecked } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked  {

  constructor() {}

  anio: number = new Date().getFullYear();

  ngOnInit() {
    
  }

  ngAfterViewChecked() {
    
  }
}
