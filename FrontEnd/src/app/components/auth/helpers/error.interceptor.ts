import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler){
        return next.handle(request).pipe(catchError(error => {
            if ([401, 403].indexOf(error.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                this.authService.Logout();
                location.reload();
            }

            return throwError(this.getError(error));
        }));
    }

    private getError(error: any) {
        if (error && error.error && error.error.message) {
            return error.error.message;
        }
        else if (error && error.message) {
            return error.message;
        }
        else if (error) {
            return error.toString()
        }
        return 'Oops - something went wrong. Whatever happened, it was probably our fault. Please try again';
    }
}
