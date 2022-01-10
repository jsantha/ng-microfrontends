import { getProjects, Tree } from '@nrwl/devkit';

export function getNextServePort(tree: Tree): number {
  const assignedPorts = Array.from(getProjects(tree).values())
    .filter(x => x.projectType === 'application' && x.targets.serve != null)
    .map(x => x.targets.serve.options.port)
    .sort((a, b) => b - a);

  return assignedPorts[0] + 1;
}
