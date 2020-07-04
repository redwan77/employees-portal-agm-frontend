import { Component, OnInit } from '@angular/core';
import { AthenticationService } from 'src/app/security/athentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private authenticationService: AthenticationService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this.authenticationService.getBasicAuthenticationCredentials()) {
    }
    else
      this.router.navigate(['../login'], { relativeTo: this.activatedRoute });
  }
}
