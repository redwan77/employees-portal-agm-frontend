import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
})
export class MainComponent implements OnInit {
  // Longitude‎: ‎-97.8220
  // Latitude‎: ‎37.7510

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
