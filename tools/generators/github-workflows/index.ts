import { formatFiles, Tree, generateFiles, getProjects, joinPathFragments } from '@nrwl/devkit';
import { toClassName } from '@nrwl/workspace';

interface Schema {}

export default async function (tree: Tree, schema: Schema) {
  const projects = getProjects(tree);
  const mfes = Array.from(projects.entries()).filter(([name, config]) => (config as any).prefix === 'microfrontends');

  const mfeNames = mfes.map(x => x[0]);

  for (const mfe of mfeNames) {
    generateFiles(tree, joinPathFragments(__dirname, './files'), '.github/workflows', {
      tmpl: '',
      name: mfe,
      nameUpper: mfe.toUpperCase(),
      nameCapitalized: toClassName(mfe)
    });
  }

  await formatFiles(tree);
}
