import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.css']
})
export class FlagComponent implements OnInit {

  private dropToggled: boolean = false ;
  constructor() { }

  ngOnInit() {
  }

  public toggleIncidenceDropDown() {
    this.dropToggled = !this.dropToggled ;
  }


}
