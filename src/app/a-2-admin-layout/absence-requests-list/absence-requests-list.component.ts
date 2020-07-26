import { Component, OnInit } from '@angular/core';
import { AbsenceService } from 'src/app/shared/services/absence.service';
import { AbsenceRequest } from '../shared/models/absence-request';

@Component({
  selector: 'app-absence-requests-list',
  templateUrl: './absence-requests-list.component.html',
  styleUrls: ['./absence-requests-list.component.css']
})
export class AbsenceRequestsListComponent implements OnInit {

  requests: AbsenceRequest[];
  a : boolean ;
  constructor(private service: AbsenceService) { }

  ngOnInit() {
    this.service.getAllAbsencerequest().subscribe(data => {
      this.requests = data;
      console.log(data);
      
    });
  }

  updateRequest(body :AbsenceRequest,state :boolean){
    
    body.accepted= state ;
    console.log(body.accepted);

    this.service.updateAbsenceRequest(body).subscribe((data :AbsenceRequest[]) =>{
      this.requests = data ;
    });
  }



}
