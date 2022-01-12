import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-homedash',
  templateUrl: './homedash.component.html',
  styleUrls: ['./homedash.component.css']
})
export class HomeDashComponent implements OnInit {

  constructor(private service:SharedService,private authService: AuthService) { }
  logout(): void {
    this.authService.Logout();
  }
  ngOnInit() {}

  getValues() {}
}
