# Micro-frontends

Showcase of independently deployable, distributed development ready micro-frontends in Angular.

## Pros
- independent deployment
- scalable CI

## Cons

### Deployment status

| App   | URL                                         | Status                                                                                                                                                                       |
|-------|---------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Shell | https://ng-microfrontends.netlify.app       | [![Netlify Status](https://api.netlify.com/api/v1/badges/092bb251-9521-44a6-88e7-bff082471fda/deploy-status)](https://app.netlify.com/sites/ng-microfrontends/deploys)       |
| Login | https://ng-microfrontends-login.netlify.app | [![Netlify Status](https://api.netlify.com/api/v1/badges/e2f15c33-8aac-48d1-9344-c07ad60d3fec/deploy-status)](https://app.netlify.com/sites/ng-microfrontends-login/deploys) |

### Running in docker

From `/docker` run `run.sh` and open `http://localhost:4500`.

### Running locally in development mode

```
nx run shell:serve-mfe
```

# Architecture overview

## NX workspace in monorepo

## Application shell

`apps/shell`

Entry application responsible for loading each individual micro-frontend.

## Micro-frontend internals

## Module Federation Plugin

## Environment agnostic build

`Shell` application fetches `modules.json` during runtime to know where each individual
micro-frontend is hosted.

## Continuous Integration (CI)

Nx affected command greatly improves scalability of monorepos. With this command we are able
to detect which projects has been affected by the changes between the base and the head.

## Deployment

`nx affected:apps --plain`

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
