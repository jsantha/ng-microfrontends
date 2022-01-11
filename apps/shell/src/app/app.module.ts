import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { loadRemoteModule } from './load-remote-module';
import { AreaDbgModule, BuildInfoModule } from '@microfrontends/shared/utils';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BuildInfoModule,
    AreaDbgModule,
    RouterModule.forRoot(
      [
        {
          path: 'login',
          loadChildren: () => loadRemoteModule('login'),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
