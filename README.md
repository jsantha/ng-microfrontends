# Micro-frontends
 
## Deployment status

| App   | URL                                         | Status                                                                                                                                                                       |
|-------|---------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Shell | https://ng-microfrontends.netlify.app       | [![Netlify Status](https://api.netlify.com/api/v1/badges/092bb251-9521-44a6-88e7-bff082471fda/deploy-status)](https://app.netlify.com/sites/ng-microfrontends/deploys)       |
| Login | https://ng-microfrontends-login.netlify.app | [![Netlify Status](https://api.netlify.com/api/v1/badges/e2f15c33-8aac-48d1-9344-c07ad60d3fec/deploy-status)](https://app.netlify.com/sites/ng-microfrontends-login/deploys) |


## Commands

Runs whole application with all micro-frontends
```
nx run shell:serve-mfe
```

Generate github workflows for each application
```
nx workspace-generator github-workflows
```
