import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

//import { Role } from 'src/app/models/role.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  public activeRoute!: string;
  public completeName!:string;
  public currentRole!:string;

  constructor(
    private authService: AuthService, 
    public route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProfile();
    this.activeRoute = this.router.url;
    this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd ) {
        this.activeRoute = event.url.replace('/dashboard', '');
        this.getProfile();
      }
    });
  }

  getProfile() {
    this.completeName = this.authService.getName();
  }

  logout(): void {
    this.authService.Logout();
  }
}
