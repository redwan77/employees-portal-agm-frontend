import { Component, OnInit } from '@angular/core';
import { ILogout } from 'src/app/shared/interfaces/ILogout';
import { LoginService } from 'src/app/shared/services/login.service';
import { AthenticationService } from 'src/app/security/athentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit, ILogout {

  constructor(
    private service: LoginService,
    private authenticationService: AthenticationService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  logout() {
    console.log('test');
    
    this.service.logout();
    this.router.navigate(['/login']);
  }

}
