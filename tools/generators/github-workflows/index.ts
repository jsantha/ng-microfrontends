import {
  names,
  formatFiles,
  Tree,
  generateFiles,
  getProjects,
  joinPathFragments,
} from '@nrwl/devkit';

interface Schema {}

export default async function (tree: Tree, schema: Schema) {
  const projects = getProjects(tree);
  const mfes = Array.from(projects.entries()).filter(
    ([name, config]) =>
      config.projectType === 'application' &&
      (config as any).prefix === 'microfrontends'
  );

  const mfeNames = mfes.map((x) => x[0]).filter((x) => x !== 'shell');

  for (const mfe of mfeNames) {
    generateFiles(
      tree,
      joinPathFragments(__dirname, './files'),
      '.github/workflows',
      {
        tmpl: '',
        name: mfe,
        nameUpper: mfe.toUpperCase(),
        nameCapitalized: names(mfe).className,
      }
    );
  }

  await formatFiles(tree);
}
