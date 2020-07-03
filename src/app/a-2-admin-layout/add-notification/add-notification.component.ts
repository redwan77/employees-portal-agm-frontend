import { Component, OnInit } from '@angular/core';
import { AthenticationService } from 'src/app/security/athentication.service';

@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.css']
})
export class AddNotificationComponent implements OnInit {

  constructor(private authenticationService: AthenticationService,
    ) { }

  ngOnInit() {
    this.authenticationService.logout();
  }

}
