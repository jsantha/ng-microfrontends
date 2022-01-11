import { Component } from '@angular/core';
import { AuthService } from '@microfrontends/shared/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'microfrontends-login-entry',
  template: `
    <microfrontends-area-dbg
      name="apps/login"
      [builtAt]="builtAt"
      [revision]="revision"
    >
      <h2>Login</h2>
      <form>
        <div>Username: <input name="username" [(ngModel)]="username" /></div>
        <div>
          Password:
          <input name="password" type="password" [(ngModel)]="password" />
        </div>
        <button (click)="login(username!, password!)">Login</button>
      </form>
    </microfrontends-area-dbg>
  `,
})
export class RemoteEntryComponent {
  readonly builtAt = BUILT_AT;
  readonly revision = GIT_SHA;

  username?: string;
  password?: string;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  login(username: string, password: string) {
    this.authService.login(username, password);
    this.router.navigateByUrl('/');
  }
}
