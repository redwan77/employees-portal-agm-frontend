import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';
import { AthenticationService } from 'src/app/security/athentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ILogout } from 'src/app/shared/interfaces/ILogout';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { Notification } from '../../shared/models/Notification';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent implements OnInit, ILogout {

  private username = '';
  private notifsNumber=0;
  
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
    console.log('test user');
    this.service.logout();
    this.router.navigate(['/login']);
  }

  public refreshNotifications(){
    setTimeout(
        () => {
          this.getUserNotificationsnumber()
        },
        5000
    );
  }

  public getUserNotificationsnumber(){
    this.notificationService.getUserNotification().subscribe(
      (dataNotification: Notification[]) =>{
        this.notifsNumber= dataNotification.length;
        console.log(dataNotification);
      }
    );
  }

  


}
