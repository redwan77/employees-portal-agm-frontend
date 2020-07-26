import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/services/employee.service';
import { EntranceRequest } from '../shared/models/entrance-request';
import { LocationCordinates } from '../shared/models/location';
import { ExitRequest } from '../shared/models/exit-request';
import { EmployeeStatusService } from '../shared/services/employee-status.service';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.css']
})
export class FlagComponent implements OnInit {

  private dropToggled: boolean = false;
  private isIn: boolean;
  private errorCase = false;
  private errorMessage = '';
  private breaks = ['breakfast break ', 'dinner break','small break'];

  constructor(
    private employeeService: EmployeeService,
    private employeeStatusService: EmployeeStatusService
  ) { }

  ngOnInit() {
    this.setEmployeeStatus()
  }

  public toggleIncidenceDropDown() {
    this.dropToggled = !this.dropToggled;
  }

  setEmployeeStatus() {
    this.employeeService.getEmployeeStatus().subscribe(data => {
      this.isIn = data.isIn;
    });
  }

  sendEntranceRequest(request: EntranceRequest) {

    this.employeeService.createEntranceRequest(request).subscribe(
      data => {
        this.employeeStatusService.changeEmployeeState(true);
        console.log("entrance success");
      },
      error => {
        this.errorCase = true;
        this.errorMessage = "You can not apply entrance with your current position or sircumstances";
      }
    );
  }

  sendExitRequest(request: ExitRequest) {

    this.employeeService.createExitRequest(request).subscribe(
      data => {
        this.employeeStatusService.changeEmployeeState(false);
        console.log("exit success");
      },
      error => {
        this.errorCase = true;
        this.errorMessage = "You can not apply exit with your current position or sircumstances";
      }
    );
  }

  submitEntrance() {

    const currentLocation = new LocationCordinates();
    const request = new EntranceRequest();

    navigator.geolocation.getCurrentPosition((localisation) => {

      currentLocation.latitude = localisation.coords.latitude;
      currentLocation.longitude = localisation.coords.longitude;
      request.location = currentLocation;

      this.sendEntranceRequest(request);
    });
  }

  submitExit() {

    const currentLocation = new LocationCordinates();
    const request = new ExitRequest();
    request.golbalExit = true;

    navigator.geolocation.getCurrentPosition((localisation) => {

      currentLocation.latitude = localisation.coords.latitude;
      currentLocation.longitude = localisation.coords.longitude;
      request.location = currentLocation;

      this.sendExitRequest(request);
    });
  }

  submitPartialExit() {

    const currentLocation = new LocationCordinates();
    const request = new ExitRequest();
    request.golbalExit = false;

    navigator.geolocation.getCurrentPosition((localisation) => {

      currentLocation.latitude = localisation.coords.latitude;
      currentLocation.longitude = localisation.coords.longitude;
      request.location = currentLocation;

      this.sendExitRequest(request);
    });
  }

  closeErrorBanner() {
    this.errorCase = false;
    this.errorMessage = "";
  }



}
