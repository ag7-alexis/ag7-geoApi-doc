import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const TOKEN_HEADER_KEY = 'Authorization';

const PUBLIC_TOKEN = '***';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    if (req.url.startsWith("https://api-ag7-geo.herokuapp.com\\public")) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, PUBLIC_TOKEN) });
    } else {
      const token = this.tokenService.getToken();
      if (token != null) {
        authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
      }
    }
    return next.handle(authReq);
  }

}
