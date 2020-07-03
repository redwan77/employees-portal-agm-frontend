import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AthenticationService } from './athentication.service';


const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private authService: AthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.authService.getBasicAuthenticationCredentials()) {
      const token = this.authService.getBasicAuthenticationCredentials();

      let request = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'basic ' + token) });

      console.log(request.headers);
      
      return next.handle(request);
    }
  
    return next.handle(req);
  

  }



}
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
];
