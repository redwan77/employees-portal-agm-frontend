import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';
import { AthenticationService } from 'src/app/security/athentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ILogout } from 'src/app/shared/interfaces/ILogout';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent implements OnInit, ILogout {

  constructor(
    private service: LoginService,
    private authenticationService: AthenticationService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  logout() {
    console.log('test user');

    this.service.logout();
    this.router.navigate(['/login']);
  }

}
