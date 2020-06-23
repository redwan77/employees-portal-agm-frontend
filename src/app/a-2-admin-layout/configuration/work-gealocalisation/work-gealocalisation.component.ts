import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-gealocalisation',
  templateUrl: './work-gealocalisation.component.html',
  styleUrls: ['./work-gealocalisation.component.css']
})
export class WorkGealocalisationComponent implements OnInit {
  editMode = false;
  long: number;
  lat: number;

  constructor() { }

  ngOnInit() {
    
  }

  onClickLocation($event) {
    if (this.editMode) {
      console.log('test');

      console.log($event);
      this.lat = $event.coords.lat;
      this.long = $event.coords.lng;
    }
  }
  changeMode(){
    this.editMode =!this.editMode;
  }

  getCurrentLocation (){
    navigator.geolocation.getCurrentPosition((localisation) => {
      this.lat = localisation.coords.latitude;
      this.long = localisation.coords.longitude;
    });
  }
}
