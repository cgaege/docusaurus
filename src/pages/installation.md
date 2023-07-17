---
title: Installation
description: Install Health Discovery using Docker
hide_table_of_contents: true
---

# Docker Deployment

Installing Health Discovery using Docker is the easiest and fastest way to get started.

## System Requirements

- A current version of Docker with Compose V2

## Prerequisites

```bash
sudo docker compose up -d
```

## Installation Steps

- Login to the Averbis docker registry
- Download the `docker-compose.yml` file
- Run Health Discovery


### Login to registry.averbis.com

Login to the Averbis docker registry using your Averbis credentials to pull Docker images.

```bash
sudo docker login registry.averbis.com
```

After successful login you should see something like this:

```bash
Username: me@example.com
Password: ***********

Login Succeeded
```

### Download the `docker-compose.yml` file

Averbis provides a `docker-compose.yml` file for every version of Health Discovery. It is used to configure and orchestrate the docker images that make up the Averbis Health Discovery  application. The docker-compose.yml file is packaged as an health-discovery-VERSION-docker.zip archive and can be downloaded from the Averbis Download Portal.

:::note

Can we provide a convenient download link for the latest and greatest version of `docker-compose.yml`?

:::





:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

‚