import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { absenceRequest } from '../../a-1-user-layout/shared/models/absence-request';
import { Observable } from 'rxjs';
import { ABSENCE_REQUEST_ENDPOINT, ABSENCE_VERIFICATION_ENDPOINT, USER_DELAYS_ENDPOINT, ALL_ABS_REQUESTS, UPDATE_REQUEST } from 'src/app/shared/configuration-data/endpoints-keys';
import { absenceVerification } from '../../a-1-user-layout/shared/models/absence-verification';
import { Delay } from '../models/delay';
import { AbsenceRequest } from 'src/app/a-2-admin-layout/shared/models/absence-request';
import { MACHINE_KEY } from 'src/app/a-2-admin-layout/shared/configuration-data/api-keys';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  constructor(private http: HttpClient) { }

  public createAbsenceRequest(body: absenceRequest): Observable<any> {
    return this.http.post(ABSENCE_REQUEST_ENDPOINT, body)
  }

  public createAbsenceVerification(body: absenceVerification) {
    return this.http.post(ABSENCE_VERIFICATION_ENDPOINT, body);
  }

  public getUserDelays(): Observable<Delay[]> {
    return this.http.get<Delay[]>(USER_DELAYS_ENDPOINT);
  }

  public confirmVerification(delay: Delay , delayId : number ): Observable<any> {
    return this.http.put(USER_DELAYS_ENDPOINT + '/verifyDelay/'+delayId , delay);
  }

  public getAllAbsencerequest(): Observable<any> {
    return this.http.get<any>(ALL_ABS_REQUESTS);
  }

  public updateAbsenceRequest(body: AbsenceRequest): Observable<any>{
    return this.http.put(UPDATE_REQUEST, body);
  }

  updateverification(body : Delay): Observable<any>{
    return this.http.put(MACHINE_KEY+'/absence/updateDelay', body);
  }

  public getAllDelays(): Observable<any> {
    return this.http.get<any>(MACHINE_KEY+'/absence/allDelays');
  }

}
