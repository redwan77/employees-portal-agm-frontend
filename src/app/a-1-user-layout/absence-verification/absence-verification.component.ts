import { Component, OnInit } from '@angular/core';
import { AbsenceService } from 'src/app/shared/services/absence.service';
import { Delay } from 'src/app/shared/models/delay';

@Component({
  selector: 'app-absence-verification',
  templateUrl: './absence-verification.component.html',
  styleUrls: ['./absence-verification.component.css']
})
export class AbsenceVerificationComponent implements OnInit {

  public delays: Delay[];
  constructor(private service: AbsenceService) { }

  ngOnInit() {
    this.fetchData();
  }

  public fetchData() {
    this.service.getUserDelays().subscribe(
      data => {
        this.delays = data;
        console.log(data);

      }
    );
  }

  confirmVerification(body: Delay, delayId: number) {
    //this.service
    this.service.confirmVerification(body, delayId).subscribe(
      (data: Delay[]) => {
        this.delays = data;
      }
    );
  }

}
