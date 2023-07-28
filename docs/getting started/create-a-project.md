---
sidebar_position: 3
---

# Create a Project

Projects are used to separate data, configurations and users from each other. Create a new project using the API call below and provide a project `name` and `description` along with your `api-token`. 

```js title="POST /v1/projects"
curl -X POST "http://localhost:8080/health-discovery/rest/v1/projects?\
  description=YOUR-PROJECT-DESCRIPTION&name=YOUR-PROJECT-NAME" \
  -H "accept: application/json;charset=UTF-8" \
  -H "api-token: YOUR-API-TOKEN"
```

```js title="RESPONSE"
{
  "payload": {
    "id": 1009,
    "name": "YOUR-PROJECT-NAME",
    "description": "YOUR-PROJECT-DESCRIPTION"
  },
  "errorMessages": []
}
```

Congratulations, you've successfully created a new project.