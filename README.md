# Angular Micro-Frontends

Showcase of independently deployable, distributed development ready micro-frontends based on Angular
and [Module Federation](https://webpack.js.org/concepts/module-federation/).

### Deployment status

| App   | URL                                         | Status                                                                                                                                                                       |
| ----- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Shell | https://ng-microfrontends.netlify.app       | [![Netlify Status](https://api.netlify.com/api/v1/badges/092bb251-9521-44a6-88e7-bff082471fda/deploy-status)](https://app.netlify.com/sites/ng-microfrontends/deploys)       |
| Login | https://ng-microfrontends-login.netlify.app | [![Netlify Status](https://api.netlify.com/api/v1/badges/e2f15c33-8aac-48d1-9344-c07ad60d3fec/deploy-status)](https://app.netlify.com/sites/ng-microfrontends-login/deploys) |

### Recommendations

- Use monorepo and keep most of the code in it
- Use monorepo to provide a single set of dependencies and to keep runtimes small and compatible
- Use [nx.dev](https://nx.dev/) to get strong monorepo workspace tooling
- Create and enforce dependency boundaries via [nx.dev/structure/monorepo-tags](https://nx.dev/structure/monorepo-tags)
- Use dependency graph to get a better understanding of workspace architecture [nx.dev/structure/dependency-graph](https://nx.dev/structure/dependency-graph)
- Leverage [nx affected](https://nx.dev/using-nx/affected) to build fast and scalable integration/deployment pipelines
- Define [code ownerships](https://nx.dev/guides/monorepo-nx-enterprise#code-ownership)
- Use [workspace generators](https://nx.dev/generators/workspace-generators) to simplify and standardize work across multiple teams

### Running in docker

From `/docker` run `run.sh` and open `http://localhost:4500`.

### Running locally in development mode

```
nx run shell:serve-mfe
```

# Architecture overview

## Module Federation

Real game-changer to a micro-frontend world. This webpack module allows loading
separate builds that are developed and deployed individually. These separate builds
can share dependencies and can achieve (if properly configured) great results in
a form of optimized and small builds assuming single SPA framework and dependency set
is used.

Your host application can be truly dynamic in a way that the host does not need to 
know how many remotes exist upfront (at compile time) and can resolve this information
at runtime and thus enabling extending the system without redeploying the whole
application.

## Dynamic Module Federation

In this showcase `Shell` application fetches `modules.json` during runtime to know where
each individual micro-frontend is hosted to enable environment agnostic builds and much 
more. The `modules.json` can be more than a static definition, it can be replaced by a
backend endpoint that returns remote endpoints together with their description (menu 
title, icon, etc.) that the host uses to render a dynamic menu and effectively create a plugin
based system.

## Continuous Integration (CI)

Nx [affected](https://nx.dev/using-nx/affected) command greatly improves scalability of a monorepo. With this command we are able
to detect which projects have been affected by the changes between the base and the head.

Note: for correct behaviour you need to set up BASE and HEAD SHAs correctly during pipeline
run. For GitHub actions you can use [nrwl/nx-set-shas](https://github.com/nrwl/nx-set-shas) and take
a look at `.github/workflows/ci.yml` for inspiration.

## Deployment

With `nx affected:apps --plain` we retrieve changed apps and dynamically deploy only those apps that are affected
by the current set of changes.

In this showcase, after each commit to the `main` branch and successful CI, a deployment to netlify automatically triggers
for each affected application. See `.github/workflows/ci.yml` for inspiration.

## NX workspace

## Application shell

`apps/shell`

Entry (host) application responsible for loading each individual micro-frontend.

## Micro-frontend internals

## Checklist

- [ ] `modules.json` excluded from HTTP cache
- [ ] `remoteEntry.json` excluded from HTTP cache

### Commands

Generate github workflows for each remote application

```
nx workspace-generator github-workflows
```

## TODO:

- [ ] webpack utility to automatically register shared local libraries based on a specific path (i.e. @microfrontends/shared/\*)
