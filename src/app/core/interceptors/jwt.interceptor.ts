import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { ToasterService } from '../services/toastr/toaster.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private router: Router, private toaster: ToasterService) { }
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
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error Status:', error.status);
        console.error('Error Message:', error.message);
        console.log(error);

        this.toaster.error(`${error.status} - ${error.error.error}`)

        // Return an observable with a user-facing error message
        return throwError(() => new Error('Something went wrong; please try again later.'));
      })
    );

  }
}
