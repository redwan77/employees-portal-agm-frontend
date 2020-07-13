import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/services/employee.service';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-employees-status',
  templateUrl: './employees-status.component.html',
  styleUrls: ['./employees-status.component.css']
})
export class EmployeesStatusComponent implements OnInit {

  employees: User[];
  constructor(
    private service: EmployeeService
  ) { }

  ngOnInit() {
    this.service.getEmployeesStatus().subscribe(
      data => {
        this.employees = data;
        console.log(this.employees);
      }
    );
  }

}
