import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { absenceRequest } from '../../a-1-user-layout/shared/models/absence-request';
import { Observable } from 'rxjs';
import { ABSENCE_REQUEST_ENDPOINT, ABSENCE_VERIFICATION_ENDPOINT, USER_DELAYS_ENDPOINT } from 'src/app/shared/configuration-data/endpoints-keys';
import { absenceVerification } from '../../a-1-user-layout/shared/models/absence-verification';
import { Delay } from '../models/delay';

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
}
