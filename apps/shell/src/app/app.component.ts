import { Component } from '@angular/core';
import { AuthService, AuthStatus } from '@microfrontends/shared/auth';
import { map } from 'rxjs';

@Component({
  selector: 'microfrontends-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly currentUser$ = this.authService.status$.pipe(
    map((status) =>
      status === AuthStatus.LoggedIn ? this.authService.username : null
    )
  );

  constructor(private readonly authService: AuthService) {}
}
