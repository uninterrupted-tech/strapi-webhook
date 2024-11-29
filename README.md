# 🚀 Passing Body Data in Strapi Webhooks: Triggering GitHub Workflows Example

## 📝 Overview

This project demonstrates how to set up a Strapi webhook that triggers a GitHub workflow when specific content is created or updated. It showcases the integration between Strapi and GitHub Actions for automated deployment or other CI/CD processes. For a detailed walkthrough, check out the accompanying [blog post](https://uninterrupted.tech/blog/passing-body-data-in-strapi-webhooks-triggering-git-hub-workflows-example/).

## 🛠 Prerequisites

- Node.js (v18 or later)
- PostgreSQL database
- GitHub repository with PAT (Personal Access Token)

## 📚 Related Resources

- [uninterrupted.tech blog](https://uninterrupted.tech/blog/)
- [Strapi Webhooks Documentation](https://docs.strapi.io/dev-docs/backend-customization/webhooks)
- GitHub Documentation
  - [Triggering actions](https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#create-a-repository-dispatch-event)
  - [PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

## 🖥️ Strapi CLI

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```
