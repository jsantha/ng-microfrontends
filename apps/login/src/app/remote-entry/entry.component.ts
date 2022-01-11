import { Component } from '@angular/core';
import { AuthService } from '@microfrontends/shared/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'microfrontends-login-entry',
  template: `
    <form>
      <div>Username: <input name="username" [(ngModel)]="username" /></div>
      <div>
        Password:
        <input name="password" type="password" [(ngModel)]="password" />
      </div>
      <button (click)="login(username!, password!)">Login</button>
    </form>
    <microfrontends-build-info
      name="login"
      [builtAt]="builtAt"
      [revision]="revision"
    ></microfrontends-build-info>
  `,
  styleUrls: ['./entry.component.scss'],
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
