import { Component, OnInit } from '@angular/core';
import { ILogout } from 'src/app/shared/interfaces/ILogout';
import { LoginService } from 'src/app/shared/services/login.service';
import { AthenticationService } from 'src/app/security/athentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit, ILogout {

  private username = '';

  constructor(
    private service: LoginService,
    private authenticationService: AthenticationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private notificationService : NotificationService) { }

  ngOnInit() {
    this.username =  this.authenticationService.getUsername();
  }

  logout() {
    this.service.logout();
    this.router.navigate(['/login']);
  }

}
