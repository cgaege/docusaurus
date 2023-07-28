---
sidebar_position: 1
---

# Create a Project

The product uses `projects` to separate different data, configurations and users from each other. 

## Create your first Project

Request

```bash
curl -X POST 
"http://localhost:8080/information-discovery/rest/v1/projects?description=Some%20meaningful%20project%20description&name=NewProject" 
-H "accept: application/json;charset=UTF-8" 
-H "api-token: 1746847c8798c4eada1008eab95efc56b9acaef1ee1505ed6a0deb6ec0a90914"
```

Response

```js
{
  "payload": {
    "id": 1009,
    "name": "NewProject",
    "description": "Some meaningful project description"
  },
  "errorMessages": []
}
```


:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::caution

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::