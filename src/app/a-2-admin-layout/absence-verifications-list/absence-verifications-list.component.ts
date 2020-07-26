import { Component, OnInit } from '@angular/core';
import { AbsenceService } from 'src/app/shared/services/absence.service';
import { Delay } from 'src/app/shared/models/delay';

@Component({
  selector: 'app-absence-verifications-list',
  templateUrl: './absence-verifications-list.component.html',
  styleUrls: ['./absence-verifications-list.component.css']
})
export class AbsenceVerificationsListComponent implements OnInit {

  public delays: Delay[];
  constructor(private service: AbsenceService) { }

  ngOnInit() {
    this.fetchData();
  }

  public fetchData() {
    this.service.getAllDelays().subscribe(
      data => {
        this.delays = data;
      }
    );
  }

  updateverification(item: Delay, verified: boolean) {
    item.verified = verified;
    console.log("is verified "+item.verified);
    console.log(item);
    this.service.updateverification(item).subscribe(data => {
      this.delays = data;
        console.log(data);
    });
  }

}
