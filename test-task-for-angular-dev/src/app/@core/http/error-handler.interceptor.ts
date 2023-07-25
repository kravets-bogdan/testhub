//  * Base
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// * environment
import { environment } from '@env/environment';

// * RxJS
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// * Service
import { Logger } from '../logger.service';

const log = new Logger('ErrorHandlerInterceptor');

/**
 * Adds a default error handler to all requests.
 */
@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError((error) => this.errorHandler(error)));
  }

  // Customize the default error handler here if needed
  private errorHandler(error: HttpErrorResponse): Observable<any> {
    if (!environment.production) {
      // Do something with the error
      log.error('Request error', error);
    }

    // Redirect to /login on 404 error
    if (error.status === 404) {
      this.router.navigateByUrl('/login');
    }

    return throwError(error);
  }
}
