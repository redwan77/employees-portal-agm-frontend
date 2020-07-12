import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { absenceRequest } from '../models/absence-request';
import { Observable } from 'rxjs';
import { ABSENCE_REQUEST_ENDPOINT } from 'src/app/shared/configuration-data/endpoints-keys';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  constructor(private http : HttpClient) { }

  public createAbsenceRequest(body : absenceRequest): Observable<any>{
    return this.http.post(ABSENCE_REQUEST_ENDPOINT, body)
  }
}
