import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeStatus } from '../models/employee-status';
import { Observable } from 'rxjs';
import { API_KEY_EMPLOYEE } from 'src/app/a-2-admin-layout/shared/configuration-data/api-keys';
import { EntranceRequest } from '../models/entrance-request';
import {  LocationCordinates } from '../models/location';
import { ExitRequest } from '../models/exit-request';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient) { }

  public getEmployeeStatus(): Observable<EmployeeStatus> {
    return this.http.get<EmployeeStatus>('http://localhost:9090/users' + '/status');
  }

  public createEntranceRequest(request: EntranceRequest) :Observable<any>{
    return this.http.post("http://localhost:9090/presence/entrance",request );
  }

  public createExitRequest(request: ExitRequest) :Observable<any>{
    return this.http.post("http://localhost:9090/presence/exit",request );
  }


  
}
