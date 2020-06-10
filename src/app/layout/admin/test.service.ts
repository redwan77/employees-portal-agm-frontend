import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService implements OnInit {

  constructor() { 
    
  }
  ngOnInit(): void {
    console.log("hello from service");
  }
}
