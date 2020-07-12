import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/services/employee.service';
import { EmployeeStatusService } from '../shared/services/employee-status.service';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css']
})
export class DigitalClockComponent implements OnInit {

  currentTime = new Date();
  private isIn: boolean;


  constructor(
    private employeeStatusService: EmployeeStatusService
  ) { }

  ngOnInit() {
    this.updateTime();
    this.setEmployeeStatus();

  }

  public updateTime() {
    this.currentTime = new Date();
    setTimeout(() => {
      this.updateTime();
    }, 1000);
  }

  setEmployeeStatus() {
    this.employeeStatusService.$currentEmployeeState.subscribe(state => {
      this.isIn = state;
    });
  }
}
