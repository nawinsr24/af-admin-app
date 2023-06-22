import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    const baseUrl = environment.apiURL;

    let modifiedRequest = request;
    // console.log(request.url);

    if (token) {
      modifiedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    } else {
      if (request.url !== '/admin/login')
        this.router.navigateByUrl('/login')
    }

    modifiedRequest = modifiedRequest.clone({
      url: `${baseUrl}${modifiedRequest.url}`
    });

    return next.handle(modifiedRequest).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('Response Status:', event.status);
        }
      })
    );
  }
}
