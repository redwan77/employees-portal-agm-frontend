import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeStatusService {

  private currentEmployeeState: BehaviorSubject<boolean> = new BehaviorSubject(true);
  $currentEmployeeState = this.currentEmployeeState.asObservable();

  constructor(private employeeService: EmployeeService) {
    this.employeeService.getEmployeeStatus().subscribe(data => {
      this.changeEmployeeState(data.isIn);
      console.log("updated with "+ data.isIn);
    });
   }

  changeEmployeeState(isIn: boolean) {
    if (this.currentEmployeeState) {
      this.currentEmployeeState.next(isIn);
    }
    else {
      throw new Error("Employee state is not loaded yet to change it")
    }
  }
}
