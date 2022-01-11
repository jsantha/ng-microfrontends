import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'microfrontends-build-info',
  template: ` Name: {{ name }}, Built at: {{ builtAt | date: 'medium' }},
    Revision:
    <a
      [href]="'https://github.com/jsantha/ng-microfrontends/commit/' + revision"
      >{{ revision }}</a
    >`,
  styleUrls: ['./build-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuildInfoComponent {
  @Input()
  name?: string;

  @Input()
  builtAt?: number;

  @Input()
  revision?: string;
}
