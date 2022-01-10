import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum AuthStatus {
  Anonymous,
  LoggedIn,
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _username?: string;
  private readonly status = new BehaviorSubject(AuthStatus.Anonymous);

  get username() {
    return this._username;
  }

  readonly status$ = this.status.asObservable();

  login(username: string, password: string) {
    this._username = username;
    this.status.next(AuthStatus.LoggedIn);
  }
}
