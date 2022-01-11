import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'microfrontends-area-dbg',
  host: {
    class: 'area-dbg',
  },
  template: `<span *ngIf="name">{{ name }}</span
    ><ng-content></ng-content
    ><microfrontends-build-info
      class="build-info"
      [name]="name"
      [builtAt]="builtAt"
      [revision]="revision"
    ></microfrontends-build-info>`,
  styleUrls: ['./area-dbg.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AreaDbgComponent {
  @Input()
  name?: string;

  @Input()
  builtAt?: number;

  @Input()
  revision?: string;
}
