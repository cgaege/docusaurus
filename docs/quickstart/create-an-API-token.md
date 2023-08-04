---
sidebar_position: 2
---


# Create an API token

In order to use the Health Discovery REST API you need to generate an API token. 

Please replace `YOUR-PASSWORD` with your `admin` user password.

```bash title="POST /v1/users/{username}/apitoken" showLineNumbers
curl -X POST "http://localhost:8080/health-discovery/rest/v1/users/admin/apitoken" \
    -H "accept: */*" -H "Content-Type: application/json" \
    -d "{ \"password\": \"YOUR-PASSWORD\", \"userSourceName\": \"\"}"
```

```js title=RESPONSE
{
  "payload": "1063ff3701e68e337f2630a0ed68e582646be3d0bdff6169d8ee277d2423dfac",
  "errorMessages": []
}
```

:::tip

Please make sure to copy your API token now and store it safely. You will not be able to see it again.

:::

Congratulations, you've successfully created an API token.