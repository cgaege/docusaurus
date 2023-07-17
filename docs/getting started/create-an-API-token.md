---
sidebar_position: 2
---


# Create an API Token

An API token is required to use the Health Discovery API. You can create you personal API token using your `username` and `password`.


```bash title="POST /v1/users/{username}/apitoken"
curl -X POST "http://localhost:8080/health-discovery/rest/v1/users/YOUR-USER/apitoken" \
    -H "accept: */*" -H "Content-Type: application/json" \
    -d "{ \"password\": \"YOUR-PASSWORD\", \"userSourceName\": \"\"}"
```

```js title=RESPONSE
{
  "payload": "1063ff3701e68e337f2630a0ed68e582646be3d0bdff6169d8ee277d2423dfac",
  "errorMessages": []
}
```
