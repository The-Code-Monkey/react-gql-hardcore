# Marketplace FE
## This is a boilerplate Marketplace FE for a creating Marketplace sites with Next.js and GraphQL.

# If you have any questions please ask Andy Wilson

## Getting Started on a new project

### Clone the repository

You will need to checkout the release/production branch to get the latest stable version of the project.

From there you will create develop-<project-name> branch to start working on your project. and also a release/<project-name> branch to deploy to production.

From this point forwards you create branches off of the develop-<project-name> branch. prefixed like so: <project-name>/<feature-name>.

If there are any updates to the marketplace api that are not project specific i.e. the catalogue api updates. then an update will be created from the develop branch.

This will then be merged into the release/production branch when stable. From there, there will need to be a rebase done into the develop-<project-name> branch.

## Getting Started on an existing project

### Clone the repository

Checkout the develop-<project-name> branch to get the latest stable version of the project.

From there you will create a <project-name>/<feature-name> branch to start working on your project.

Then follow the install instructions below

## Install
```bash
Run the following commands in the root directory of the project:

# Install dependencies

$ bun install

# Start the development server

$ bun dev