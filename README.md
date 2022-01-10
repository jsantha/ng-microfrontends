# Angular Micro-Frontends

Showcase of independently deployable, distributed development ready micro-frontends based on Angular
and [Module Federation](https://webpack.js.org/concepts/module-federation/).


### Deployment status

| App   | URL                                         | Status                                                                                                                                                                       |
|-------|---------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Shell | https://ng-microfrontends.netlify.app       | [![Netlify Status](https://api.netlify.com/api/v1/badges/092bb251-9521-44a6-88e7-bff082471fda/deploy-status)](https://app.netlify.com/sites/ng-microfrontends/deploys)       |
| Login | https://ng-microfrontends-login.netlify.app | [![Netlify Status](https://api.netlify.com/api/v1/badges/e2f15c33-8aac-48d1-9344-c07ad60d3fec/deploy-status)](https://app.netlify.com/sites/ng-microfrontends-login/deploys) |

### Recommendations
- Use monorepo for the whole application to keep all code at one place
- Use monorepo to have a single set of dependencies and to have small and compatible runtimes
- Use [nx.dev](https://nx.dev/) to get strong monorepo workspace tooling
- Create and enforce dependency boundaries via [nx.dev/structure/monorepo-tags](https://nx.dev/structure/monorepo-tags)
- Use dependency graph to have a better understanding of workspace architecture [nx.dev/structure/dependency-graph](https://nx.dev/structure/dependency-graph)
- Leverage [nx affected](https://nx.dev/using-nx/affected) to build fast and scalable integration/deployment pipelines
- Use [code ownership](https://nx.dev/guides/monorepo-nx-enterprise#code-ownership)
- Use [workspace generators](https://nx.dev/generators/workspace-generators) to simplify and standardize work in a distributed environment

### Running in docker

From `/docker` run `run.sh` and open `http://localhost:4500`.

### Running locally in development mode

```
nx run shell:serve-mfe
```

# Architecture overview

## Environment agnostic build

`Shell` application fetches `modules.json` during runtime to know where each individual
micro-frontend is hosted.

## Continuous Integration (CI)

Nx affected command greatly improves scalability of monorepos. With this command we are able
to detect which projects have been affected by the changes between the base and the head.

## Deployment

With `nx affected:apps --plain` we can dynamically deploy only those apps that are affected
by the current set of changes.

In this showcase, after each commit to the `main` branch and successful CI, deployment automatically triggers
for each affected application.

## NX workspace

## Application shell

`apps/shell`

Entry application responsible for loading each individual micro-frontend.

## Micro-frontend internals

## Module Federation

## Checklist

- [ ] `modules.json` is excluded from HTTP cache
- [ ] `remoteEntry.json` is excluded from HTTP cache

### Commands

Generate github workflows for each application
```
nx workspace-generator github-workflows
```

## TODO:
- [ ] webpack utility to automatically register shared local libraries based on path (i.e. @microfrontends/shared/*) 
