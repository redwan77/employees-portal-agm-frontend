import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { Notification } from '../../shared/models/Notification';


@Component({
  selector: 'app-notificationes',
  templateUrl: './notificationes.component.html',
  styleUrls: ['./notificationes.component.css']
})
export class NotificationesComponent implements OnInit {

  public notifications: Array<Notification>;

  constructor(private service: NotificationService) { }

  ngOnInit() {
    this.service.getUserNotification().subscribe(
      (response: Array<Notification>) => {
        this.notifications = response;
        this.marksNotficationsAsSeen(response);
      }
    );
  }

  public marksNotficationsAsSeen(arr: Array<Notification>) {
    let notificationsIds = [];
    if (arr) {
      arr.forEach(not => {
        notificationsIds.push(not.id);
      });
      console.log(notificationsIds);

      this.service.marksNotficationsAsSeen(notificationsIds).subscribe(
        data => {

        }
      );
    }
  }
}
