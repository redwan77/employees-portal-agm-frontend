import { Injectable } from '@angular/core';
import { Notification } from '../models/Notification';
import { HttpClient } from '@angular/common/http';
import { MACHINE_KEY } from '../configuration-data/endpoints-keys';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }

  /* the backend already has an instance of the currently logged in user in  a shared
   class , so noo need to specify the user id to get his notifications */
  public getUserNotification(): Observable<Notification[]> {
    return this.http.get<Notification[]>(MACHINE_KEY + '/notification/unseen-notifications');
  }

  public marksNotficationsAsSeen(arry : Array<Notification>): Observable<any>{
    console.log("done");
    return this.http.post<any>(MACHINE_KEY + '/notification/markAsSeen',arry);
  
    
  }

}
