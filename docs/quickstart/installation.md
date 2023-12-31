---
sidebar_position: 1
---


# Step 1 - Installation

Installing Health Discovery using Docker is the easiest and fastest way to get started.

## System Requirements

- Current version of Docker 
- Linux/amd64 host platform
- At least 24GB of RAM
- At least 20GB of disk space


## Installation Steps

- Log in to Averbis docker registry
- Download `docker-compose.yml` file
- Start Health Discovery


### Log in to Averbis

Log in to the Averbis docker registry using your Averbis account credentials to pull the Health Discovery docker images.

```bash
docker login registry.averbis.com
```

After successful login you should see something like this:

```bash title=Output
Username: me@example.com
Password: ***********

Login Succeeded
```

### Download the docker compose file

Fetch the Health Discovery `docker-compose.yml` file.

```bash
curl -LO https://help.averbis.com/health-discovery/docker-compose.yml
```

### Start Health Discovery

Start the Health Discovery docker containers.

```bash
docker compose up -d
```

Pulling the docker images and starting the containers may take some time. You can monitor the progress using `docker ps`. 

```bash
docker ps
```

```bash title=Output
CONTAINER ID   IMAGE                                                           COMMAND                  CREATED          STATUS                             PORTS                                                             NAMES
c9d1faac859b   registry.averbis.com/health-discovery/health-discovery:6.20.0   "./health-discovery.…"   45 seconds ago   Up 44 seconds (health: starting)   1099/tcp, 8101/tcp, 8181/tcp, 44444/tcp, 0.0.0.0:8080->8080/tcp   downloads-health-discovery-hd-1
6e91555e6d16   registry.averbis.com/gcm/gcm:7.6.0                              "karaf run"              7 days ago       Up 45 seconds (health: starting)   1099/tcp, 8101/tcp, 8181/tcp, 44444/tcp                           downloads-gcm-1
b6011906ba85   mariadb:10.5                                                    "docker-entrypoint.s…"   7 days ago       Up 44 seconds                      3306/tcp                                                          downloads-database-1
54b2f3eaf00d   registry.averbis.com/solr/solr:7.6.0                            "./platform-solr.sh"     7 days ago       Up 45 seconds (healthy)            8983/tcp                                                          downloads-solr-1

```


:::caution

Wait until all containers have been started and reached `healthy` state before proceeding.

:::

## Post-Installation Steps

:::tip

The initial password of the `admin` user is `admin`. Is is highly recommended to set an own secure password.

:::

### Set administrator password

Set a secure password for the `admin` user by replacing `YOUR-PASSWORD` with your password.

```bash title="PUT /v1/users/{userName}/changeMyPassword" showLineNumbers
curl -X PUT "http://localhost:8080/health-discovery/rest/v1/users/admin/changeMyPassword" \
-H "accept: */*" \
-H "Content-Type: application/json" \
-d "{ \"oldPassword\": \"admin\", \"newPassword\": \"YOUR_PASSWORD\"}"
```
:::note Windows

Samples for the `curl` command are written for the bash shell. To run this sample in Windows PowerShell or the Command Prompt, you may need to remove the back slashes and write the command as one line such as:
```cmd
curl -X PUT "http://localhost:8080/health-discovery/rest/v1/users/admin/changeMyPassword" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"oldPassword\": \"admin\", \"newPassword\": \"YOUR_PASSWORD\"}"
```
:::

```js title=RESPONSE
{
  "payload": null,
  "errorMessages": []
}
```
Congratulations, you have successfully installed and started Health Discovery.