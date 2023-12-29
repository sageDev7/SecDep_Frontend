import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/auth/login.service';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userLoginOn:boolean=false;
  username:string=this.dashboard.currentUser;
  constructor(private loginService:LoginService, private router:Router, private dashboard:DashboardComponent) { }

  ngOnInit(): void {
    this.username=this.dashboard.currentUser;
    this.loginService.currentUserLoginOn.subscribe(
      {
        next:(userLoginOn) => {
          this.userLoginOn=userLoginOn;
        }
      }
    )
  }

  logout()
  {
    this.loginService.logout();
    this.router.navigate(['/inicio'])
  }

}