import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountInfo } from '../account/account-info'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = 'https://api-ag7-geo.herokuapp.com';
  private PING = `${this.BASE_URL}\\ping`;
  private INFO_USER = `${this.BASE_URL}\\info\\`;

  constructor(private http: HttpClient) { }

  public ping(): Observable<any> {
    return this.http.get(this.PING);
  }

  public callAPI(url: string): Observable<any> {
    return this.http.get(url);
  }

  public getUserInfo(username: string): Observable<any> {
    return this.http.get<AccountInfo>(this.INFO_USER + username);
  }
}
