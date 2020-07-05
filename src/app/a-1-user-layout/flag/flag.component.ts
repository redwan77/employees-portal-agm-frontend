import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/services/employee.service';
import { EntranceRequest } from '../shared/models/entrance-request';
import { LocationCordinates } from '../shared/models/location';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.css']
})
export class FlagComponent implements OnInit {

  private dropToggled: boolean = false;
  private isIn: boolean;

  constructor(
    private employeeService: EmployeeService
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
        console.log("entrance success");
      },
      error => {
        console.log('entrance error');
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




}
