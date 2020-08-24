import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const TOKEN_USER = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut() {
    sessionStorage.clear();
  }

  public saveToken(token: string) {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(username: string) {
    sessionStorage.removeItem(TOKEN_USER);
    sessionStorage.setItem(TOKEN_USER, username);
  }

  public getUser(): string {
    return sessionStorage.getItem(TOKEN_USER);
  }
}
