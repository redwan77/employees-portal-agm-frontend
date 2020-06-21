import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-gealocalisation',
  templateUrl: './work-gealocalisation.component.html',
  styleUrls: ['./work-gealocalisation.component.css']
})
export class WorkGealocalisationComponent implements OnInit {
  long:number   ;
  lat : number ;

  constructor() {}

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((localisation) => {
      this.lat = localisation.coords.latitude;
      this.long = localisation.coords.longitude;
    });
  }

  onClickLocation($event){
    console.log($event);
    this.lat = $event.coords.lat;
    this.long = $event.coords.lng;
  }
}
