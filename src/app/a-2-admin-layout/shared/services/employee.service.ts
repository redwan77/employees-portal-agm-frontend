import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeAddDTO } from '../models/employee-add-DTO';
import { Observable } from 'rxjs';
import { API_KEY_EMPLOYEE } from '../configuration-data/api-keys';
import { SuccessMessage } from '../responses/user-created-mesage';
import { WorkmodeConfigurationDTO } from '../models/work-modeDTO';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(private http: HttpClient) { }

  addEmployee(body: EmployeeAddDTO): Observable<SuccessMessage> {
    return this.http.post<SuccessMessage>(API_KEY_EMPLOYEE + '/addEmployee', body );
  }

  getAllEmployees(): Observable<EmployeeAddDTO[]> {
    return this.http.get<EmployeeAddDTO[]>(API_KEY_EMPLOYEE + '/allEmployees');
  }

  updateEmployeeWorkMode(idEmployee: number, mode: WorkmodeConfigurationDTO): Observable<EmployeeAddDTO[]> {
    return this.http.put<EmployeeAddDTO[]>(API_KEY_EMPLOYEE + '/updateWorkMode/' + idEmployee, mode);
  }

  getEmployeesStatus():Observable<User[]>{
    return this.http.get<User[]>(API_KEY_EMPLOYEE+'/allEmployeeStatus');
  }
}
