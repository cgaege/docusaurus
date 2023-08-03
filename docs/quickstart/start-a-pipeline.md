---
sidebar_position: 4
---

# Start a pipeline

Health Discovery includes various preconfigured NLP pipelines. This quickstart guide will use the `discharge` pipeline that is able to extract medical entities like `diagnoses`, `medications` and `laboratory values` from patient records or discharge letters.


## Start the `discharge` pipeline
```bash title="PUT /v1/textanalysis/projects/{projectName}/pipelines/{pipelineName}/start" showLineNumbers
curl -X PUT "http://localhost:8080/health-discovery/rest/v1/textanalysis/projects/YOUR-PROJECT/pipelines/discharge/start" \
-H "accept: */*" \
-H "api-token: YOUR-API-TOKEN"
```

```js title=RESPONSE
{
  "payload": null,
  "errorMessages": []
}

```

:::info

Starting a pipeline may take some time. You can use the `GET` method on the pipeline endpoint (as shown below) to verify that the pipeline has been started.

:::

## Verify that pipeline is started



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