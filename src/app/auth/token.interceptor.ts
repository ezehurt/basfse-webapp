import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';



@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('token');
    if (token) {
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json')
                        .set('Authorization', `Bearer ${token}`)
                        .set('Access-Control-Allow-Origin', '*');

      request = request.clone({headers});
    }
    return next.handle(request);
  }
}
