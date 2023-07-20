---
sidebar_position: 4
---

# Start an NLP Pipeline

Health Discovery includes various preconfigured NLP pipelines for typical medical use cases. Pipelines are bound to a project.


## Start the `discharge` Pipeline
```bash title="PUT /v1/textanalysis/projects/{projectName}/pipelines/{pipelineName}/start" showLineNumbers
curl -X PUT "http://localhost:8080/health-discovery/rest/v1/textanalysis/projects/YOUR-PROJECT/pipelines/discharge/start" \
-H "accept: */*" \
-H "api-token: YOUR-API-TOKEN"
```

<details>
  <summary>RESPONSE</summary>

```js
{
  "payload": null,
  "errorMessages": []
}

```
</details>

Starting a pipeline may take some time. You can use the `GET` method on the pipeline endpoint to verify that the pipeline has been started.


## Verify Pipeline State



```bash title="GET /v1/textanalysis/project/{projectName}/pipelines/{pipelineName}"
curl -X GET "http://localhost:8080/health-discovery/rest/v1/textanalysis/projects/YOUR-PROJECT/pipelines/discharge" 
-H "accept: */*" 
-H "api-token: YOUR-API-TOKEN"
```

```js title=RESPONSE
{
  "payload": {
    "id": 97025364,
    "identifier": "K4HbNiCSFRegoHs_gvJU7YvAwMw=",
    "name": "discharge",
    "description": "no description",
    "pipelineState": "STARTED",
    "pipelineStateMessage": null,
    "preconfigured": true
  },
  "errorMessages": []
}
```
 The pipelineState `STARTED` indicates that the pipeline has been started successfully and is now ready to analyse text.