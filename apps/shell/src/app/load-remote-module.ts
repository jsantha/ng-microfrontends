import { loadRemoteModule as mfLoadRemoteModule } from "@angular-architects/module-federation";
import { ajax } from 'rxjs/ajax';
import { lastValueFrom, map, shareReplay } from 'rxjs';

const modulesConfig$ = ajax<Record<string, string>>('assets/modules.json').pipe(
  map(x => x.response),
  shareReplay(1)
);

export function loadRemoteModule(module: string) {
  return lastValueFrom(modulesConfig$.pipe(
    map(config => config[module])
  )).then(remoteEntry => mfLoadRemoteModule({
    type: 'module',
    remoteEntry,
    exposedModule: './Module'
  })).then(m => m.RemoteEntryModule);
}
