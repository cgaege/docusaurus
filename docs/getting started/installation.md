---
sidebar_position: 1
---


# Installation

Installing Health Discovery using Docker is the easiest and fastest way to get started.

## System Requirements

- A current version of Docker with Compose V2

## Prerequisites



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


[docker-compose.yml](./../assets/docker-compose.yml)

```bash
curl https://files.averbis.com/health-discovery/docker-compose.yml
```


### Start Health Discovery

Start the Health Discovery docker containers.

```bash
sudo docker compose up -d
```

Pulling the docker images and starteing the containers will take some time. You can monitor the progress using

```bash
sudo docker ps
```

It should look like this

```js title=RESPONSE
{
  "payload": null,
  "errorMessages": []
}
```


## Post-Installation Steps

### Set administrator password

```bash title="PUT /v1/users/{userName}/changeMyPassword"
curl -X PUT "http://localhost:8080/health-discovery/rest/v1/users/admin/changeMyPassword" 
-H "accept: */*" 
-H "Content-Type: application/json" 
-d "{ \"oldPassword\": \"admin\", \"newPassword\": \"YOUR-PASSWORD\"}"
```

```js title=RESPONSE
{
  "payload": null,
  "errorMessages": []
}
```
