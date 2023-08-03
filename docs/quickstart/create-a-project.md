---
sidebar_position: 3
---

# Create a project

Projects in Health Discovery are used to separate data, configurations and users from each other. For this guide we will create a new project named `quickstart`. 

Please replace `YOUR-API-TOKEN` with your API token.

```js title="POST /v1/projects"
curl -X POST "http://localhost:8080/health-discovery/rest/v1/projects?description=quickstart-tutorial-project&name=quickstart" \
  -H "accept: application/json;charset=UTF-8" \
  -H "api-token: YOUR-API-TOKEN"
```

```js title="RESPONSE"
{
  "payload": {
    "id": 1009,
    "name": "quickstart",
    "description": "quickstart-tutorial-project"
  },
  "errorMessages": []
}
```

Congratulations, you've successfully created a new project.