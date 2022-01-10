import {
  formatFiles,
  installPackagesTask,
  Tree,
  updateJson,
} from '@nrwl/devkit';
import { applicationGenerator } from '@nrwl/angular/generators';
import { getNextServePort } from './utils';

interface Options {
  name: string;
}

export default async function (tree: Tree, options: Options) {
  const port = getNextServePort(tree);

  await applicationGenerator(tree, {
    name: options.name,
    mfe: true,
    mfeType: 'remote',
    style: 'scss',
    strict: true,
    port,
  });

  updateJson(tree, 'apps/shell/src/assets/modules.json', modules => ({
    ...modules,
    [options.name]: `http://localhost:${port}/remoteEntry.js`,
  }));

  await formatFiles(tree);

  return () => {
    installPackagesTask(tree);
  };
}
