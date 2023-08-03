---
sidebar_position: 5
---

# Analyse health text data

Analyse health text with the `discharge` pipeline.

```bash title="POST /v1/textanalysis/projects/{projectName}/pipelines/{pipelineName}/analyseText" showLineNumbers
curl -X POST "http://localhost:8080/health-discovery/rest/v1/textanalysis/projects/intern/pipelines/discharge/analyseText?language=de" 
-H "accept: application/json;charset=UTF-8" 
-H "api-token: YOUR-API-TOKEN" 
-H "Content-Type: text/plain" 
-d "Der Patient leidet unter einer Struma diffusa, welche mit Jodid 200µg 1-0-0behandelt wird. Keine Anzeichen auf Bluthochdruck, derzeitiger Blutdruck 120/80."
```

```js title=RESPONSE
{
  "payload": [
    {
      "begin": 58,
      "end": 75,
      "type": "de.averbis.types.health.Medication",
      "coveredText": "Jodid 200µg 1-0-0",
      "id": 3721,
      "date": null,
      "dosage": [
        {
          "begin": 64,
          "end": 75,
          "type": "de.averbis.types.health.Dosage",
          "coveredText": "200µg 1-0-0",
          "id": 3728
        }
      ],
      "administrations": [],
      "brandName": "Jodid 200",
      "drugs": [
        {
          "begin": 58,
          "end": 69,
          "type": "de.averbis.types.health.Drug",
          "coveredText": "Jodid 200µg",
          "id": 3722,
          "ingredient": {
            "begin": 58,
            "end": 67,
            "type": "de.averbis.types.health.Ingredient",
            "coveredText": "Jodid 200",
            "id": 3723,
            "negatedBy": null,
            "matchedTerm": "Jodid 200",
            "dictCanon": "Kaliumiodid",
            "conceptID": "157400",
            "source": "ABDAMED_202307",
            "uniqueID": "ABDAMED_202307:157400"
          },
          "strength": {
            "begin": 64,
            "end": 69,
            "type": "de.averbis.types.health.Strength",
            "coveredText": "200µg",
            "id": 3724,
            "negatedBy": null,
            "unit": "µg",
            "matchedTerm": null,
            "dictCanon": null,
            "conceptID": null,
            "normalizedUnit": "kg",
            "source": null,
            "normalizedValue": 2e-7,
            "value": 200,
            "dimension": "[M]",
            "uniqueID": null
          }
        }
      ],
      "rateQuantity": "NaN",
      "atcCodes": [
        {
          "begin": 58,
          "end": 69,
          "type": "de.averbis.types.health.ATCCode",
          "coveredText": "Jodid 200µg",
          "id": 3734,
          "negatedBy": null,
          "matchedTerm": null,
          "dictCanon": "Iodide",
          "conceptID": "H03CA01",
          "source": "ATCA_2023",
          "uniqueID": null
        }
      ],
      "doseFrequency": {
        "begin": 70,
        "end": 75,
        "type": "de.averbis.types.health.DayTimeDoseFrequency",
        "coveredText": "1-0-0",
        "id": 3729,
        "negatedBy": null,
        "midday": 0,
        "matchedTerm": null,
        "source": null,
        "totalCount": 1,
        "atNight": "NaN",
        "morning": 1,
        "totalDose": {
          "begin": 70,
          "end": 75,
          "type": "de.averbis.types.health.Measurement",
          "coveredText": "1-0-0",
          "id": 3730,
          "unit": "µg",
          "normalizedUnit": null,
          "normalizedValue": "NaN",
          "value": 200,
          "dimension": "[M]"
        },
        "dictCanon": null,
        "conceptID": null,
        "interval": "daytime",
        "evening": 0,
        "uniqueID": null
      },
      "atc": "H03CA01",
      "termTypes": null,
      "doseForm": null,
      "category": null,
      "status": null
    },
    {
      "begin": 0,
      "end": 156,
      "type": "de.averbis.types.health.PatientInformation",
      "coveredText": "Der Patient leidet unter einer Struma diffusa, welche mit Jodid 200µg 1-0-0\nbehandelt wird. Keine Anzeichen auf Bluthochdruck, derzeitiger Blutdruck 120/80.",
      "id": 3735,
      "firstName": null,
      "lastName": null,
      "deceased": false,
      "gender": "male",
      "deathDate": null
    },
    {
      "begin": 139,
      "end": 155,
      "type": "de.averbis.types.health.BloodPressure",
      "coveredText": "Blutdruck 120/80",
      "id": 3714,
      "systolic": {
        "begin": 149,
        "end": 152,
        "type": "de.averbis.types.health.Measurement",
        "coveredText": "120",
        "id": 3715,
        "unit": "mmHg",
        "normalizedUnit": "kg/(m·s²)",
        "normalizedValue": 15998.64,
        "value": 120,
        "dimension": null
      },
      "diastolic": {
        "begin": 153,
        "end": 155,
        "type": "de.averbis.types.health.Measurement",
        "coveredText": "80",
        "id": 3716,
        "unit": "mmHg",
        "normalizedUnit": "kg/(m·s²)",
        "normalizedValue": 10665.76,
        "value": 80,
        "dimension": null
      },
      "interpretation": null
    },
    {
      "begin": 92,
      "end": 156,
      "type": "de.averbis.types.health.ClinicalSection",
      "coveredText": "Keine Anzeichen auf Bluthochdruck, derzeitiger Blutdruck 120/80.",
      "id": 3718,
      "label": "VitalSign",
      "keyword": {
        "begin": 139,
        "end": 148,
        "type": "de.averbis.types.health.ClinicalSectionKeyword",
        "coveredText": "Blutdruck",
        "id": 3717,
        "negatedBy": null,
        "matchedTerm": "Blutdruck",
        "dictCanon": "Vitalzeichen",
        "conceptID": "8716-3",
        "source": "clinical_sections_de",
        "uniqueID": "clinical_sections_de:8716-3"
      }
    },
    {
      "begin": 31,
      "end": 45,
      "type": "de.averbis.types.health.Diagnosis",
      "coveredText": "Struma diffusa",
      "id": 3719,
      "negatedBy": null,
      "matchedTerm": "Struma diffusa",
      "verificationStatus": null,
      "kind": null,
      "confidence": 0,
      "onsetDate": null,
      "source": "ICD10GM_2023",
      "clinicalStatus": "CHRONIC",
      "approach": "DictionaryLookup",
      "laterality": null,
      "dictCanon": "Nichttoxische diffuse Struma",
      "conceptID": "E04.0",
      "belongsTo": null,
      "uniqueID": "ICD10GM_2023:E04.0"
    },
    {
      "begin": 112,
      "end": 125,
      "type": "de.averbis.types.health.Diagnosis",
      "coveredText": "Bluthochdruck",
      "id": 3720,
      "negatedBy": "Keine",
      "matchedTerm": "Bluthochdruck",
      "verificationStatus": "NEGATED",
      "kind": null,
      "confidence": 0,
      "onsetDate": null,
      "source": "ICD10GM_2023",
      "clinicalStatus": "CHRONIC",
      "approach": "DictionaryLookup",
      "laterality": null,
      "dictCanon": "Essentielle Hypertonie, nicht näher bezeichnet: Ohne Angabe einer hypertensiven Krise",
      "conceptID": "I10.90",
      "belongsTo": null,
      "uniqueID": "ICD10GM_2023:I10.90"
    },
    {
      "begin": 139,
      "end": 148,
      "type": "de.averbis.types.health.ClinicalSectionKeyword",
      "coveredText": "Blutdruck",
      "id": 3717,
      "negatedBy": null,
      "matchedTerm": "Blutdruck",
      "dictCanon": "Vitalzeichen",
      "conceptID": "8716-3",
      "source": "clinical_sections_de",
      "uniqueID": "clinical_sections_de:8716-3"
    },
    {
      "begin": 0,
      "end": 156,
      "type": "de.averbis.types.health.DocumentAnnotation",
      "coveredText": "Der Patient leidet unter einer Struma diffusa, welche mit Jodid 200µg 1-0-0\nbehandelt wird. Keine Anzeichen auf Bluthochdruck, derzeitiger Blutdruck 120/80.",
      "id": 3713,
      "language": "de",
      "version": "6.19.0"
    }
  ],
  "errorMessages": []
}
```