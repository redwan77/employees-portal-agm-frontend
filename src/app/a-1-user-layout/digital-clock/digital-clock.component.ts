import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css']
})
export class DigitalClockComponent implements OnInit {

  currentTime =new  Date() ;
  constructor(){
  }

  ngOnInit() {
    // navigator.geolocation.getCurrentPosition((response)=>{
    //   console.log(response);
    // });
    this.updateTime();
  }

  public updateTime(){
    this.currentTime = new Date() ;
    setTimeout(() => {
      this.updateTime();
    }, 1000);
  }
}
