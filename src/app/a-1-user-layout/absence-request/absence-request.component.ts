import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AbsenceService } from '../shared/services/absence.service';

@Component({
  selector: 'app-absence-request',
  templateUrl: './absence-request.component.html',
  styleUrls: ['./absence-request.component.css']
})
export class AbsenceRequestComponent implements OnInit {

  private requestForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: AbsenceService) { }

  ngOnInit() {
  }

  createForm() {
    this.requestForm = this.fb.group(
      {
        absenceDate: [null],
        absenceStart: [null],
        absenceEnd: [null],
        reason: [null],
        description: [null]
      }
    );
  }

  submitForm() {
     this.service.createAbsenceRequest(this.requestForm.value).subscribe(
       data => {
         alert("Request was sent succesfully !")
       }, 
       error =>{
         alert("Request wasn't sent successfully !")
       }
     );
  }

}
