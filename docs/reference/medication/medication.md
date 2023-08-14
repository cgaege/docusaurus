---
sidebar_position: 2
---

# Medication

`de.averbis.types.health.Medication`


Describes medications, which are a combination of the active ingredient or preparation, a strength, a dose frequency, the dose form, the route of administration and date intervals or a single date.


## Example

Example text: `Lisinopril 5 MG tablet Take 5 mg by mouth daily.`

```js title="THE MEDICATION OBJECT"
{
  "begin": 0,
  "end": 47,
  "type": "de.averbis.types.health.Medication",
  "coveredText": "Lisinopril 5 MG tablet Take 5 mg by mouth daily",
  "id": 2158,
  "date": null,
  "dosage": [
    {
      "begin": 11,
      "end": 15,
      "type": "de.averbis.types.health.Dosage",
      "coveredText": "5 MG",
      "id": 2165
    },
    {
      "begin": 28,
      "end": 32,
      "type": "de.averbis.types.health.Dosage",
      "coveredText": "5 mg",
      "id": 2166
    },
    {
      "begin": 42,
      "end": 47,
      "type": "de.averbis.types.health.Dosage",
      "coveredText": "daily",
      "id": 2167
    }
  ],
  "administrations": [
    "by mouth"
  ],
  "brandName": null,
  "drugs": [
    {
      "begin": 0,
      "end": 15,
      "type": "de.averbis.types.health.Drug",
      "coveredText": "Lisinopril 5 MG",
      "id": 2159,
      "ingredient": {
        "begin": 0,
        "end": 10,
        "type": "de.averbis.types.health.Ingredient",
        "coveredText": "Lisinopril",
        "id": 2160,
        "negatedBy": null,
        "matchedTerm": "Lisinopril",
        "dictCanon": "lisinopril",
        "conceptID": "29046",
        "source": "RxNorm_202303",
        "uniqueID": "RxNorm_202303:29046"
      },
      "strength": {
        "begin": 11,
        "end": 15,
        "type": "de.averbis.types.health.Strength",
        "coveredText": "5 MG",
        "id": 2161,
        "negatedBy": null,
        "unit": "mg",
        "matchedTerm": "5 MG",
        "dictCanon": "5 MG",
        "conceptID": "STR133",
        "normalizedUnit": "kg",
        "source": "RxNormStrength_202301",
        "normalizedValue": 0.000005,
        "value": 5,
        "dimension": "[M]",
        "uniqueID": "RxNormStrength_202301:STR133"
      }
    }
  ],
  "rateQuantity": "NaN",
  "atcCodes": [
    {
      "begin": 0,
      "end": 15,
      "type": "de.averbis.types.health.ATCCode",
      "coveredText": "Lisinopril 5 MG",
      "id": 2174,
      "negatedBy": null,
      "matchedTerm": null,
      "dictCanon": "lisinopril",
      "conceptID": "C09AA03",
      "source": "ATC",
      "uniqueID": null
    }
  ],
  "doseFrequency": {
    "begin": 42,
    "end": 47,
    "type": "de.averbis.types.health.TimeMeasurementDoseFrequency",
    "coveredText": "daily",
    "id": 2169,
    "negatedBy": null,
    "totalDose": {
      "begin": 42,
      "end": 47,
      "type": "de.averbis.types.health.Measurement",
      "coveredText": "daily",
      "id": 2170,
      "unit": "mg",
      "normalizedUnit": null,
      "normalizedValue": "NaN",
      "value": 5,
      "dimension": "[M]"
    },
    "matchedTerm": "Daily",
    "dictCanon": "Daily (qualifier value)",
    "conceptID": "69620002",
    "interval": "1/day",
    "source": "DoseFrequency_1.0",
    "totalCount": 1,
    "uniqueID": "DoseFrequency_1.0:69620002"
  },
  "atc": "C09AA03",
  "termTypes": null,
  "doseForm": {
    "begin": 16,
    "end": 22,
    "type": "de.averbis.types.health.DoseForm",
    "coveredText": "tablet",
    "id": 2168,
    "negatedBy": null,
    "matchedTerm": "Tablets",
    "dictCanon": "Tablet dose form (qualifier value)",
    "conceptID": "SCT385055001",
    "source": "AverbisDoseForm_1.0",
    "uniqueID": "AverbisDoseForm_1.0:SCT385055001"
  },
  "category": null,
  "status": null
}
```

## Properties
<table>
  <thead>
    <tr>
      <th width="20%">Name</th>
      <th width="70%">Description</th>
       <th width="10%">Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>atcCodes</b></td>
      <td>The ATC classification is an official classification for pharmacological substances.</td>
      <td>ATCCode</td>
    </tr>
    <tr>
      <td><b>drugs</b></td>
      <td>Drug or multi drug of the actual medication.</td>
      <td>Drug</td>
    </tr>
     <tr>
      <td><b>doseFrequency</b></td>
      <td>Dose frequency of the actual medication.</td>
      <td>DoseFrequency</td>
    </tr>
    <tr>
      <td><b>doseForm</b></td>
      <td>Dose form of the actual medication.</td>
      <td>DoseForm</td>
    </tr>
     <tr>
      <td><b>dosage</b></td>
      <td>Dosage of the actual medication (e.g. 20 ml/hr).</td>
      <td>Dosage</td>
    </tr>
     <tr>
      <td><b>date</b></td>
      <td>Temporal information about the actual medication.</td>
      <td>Date or DateInterval</td>
    </tr>
    <tr>
      <td><b>administrations</b></td>
      <td>The routes of administration of this medication.</td>
      <td>Administration</td>
    </tr>
    <tr>
      <td><b>rateQuantity</b></td>
      <td>Amount of medication per unit of time, e.g., 2 doses.</td>
      <td>Double</td>
    </tr>
    <tr>
      <td><b>status</b></td>
      <td>Status of the medication.</td>
      <td>String</td>
    </tr>
    <tr>
      <td><b>brandName</b></td>
      <td>The specific brand name of a drug given by the producing company.</td>
      <td>String</td>
    </tr>
    <tr>
      <td><b>category</b></td>
      <td>Category of the medication.</td>
      <td>String</td>
    </tr>
    <tr>
      <td><b>termTypes</b></td>
      <td>Additional information on clinical drug, e.g. semantic clinical drug</td>
      <td>TTY</td>
    </tr>

  </tbody>
</table>


### atcCodes 
Type: [`ATCCode[]`](./atcCode.md)

The ATC classification is an official classification for pharmacological substances.


### drugs
Type: [`Drug[]`](./drug/)

The matching synonym of the Diagnosis.


### doseFrequency
Type: `DoseFrequency`

Dose frequency of the actual medication. Possible forms are a general `DoseFrequency` or the more detailed `DayTimeDoseFrequency`, `WeekDayDoseFrequency`, `TimeMeasurementDoseFrequency` etc.

### doseForm
Type: [`DoseForm`](./doseForm.md)

Dose form of the actual medication.


### dosage
Type: `Dosage`

Dosage of the actual medication (e.g. 20 ml/hr).


### date
Type: `Date` or `DateInterval`

Temporal information about the actual medication.
Format: `YYYY-MM-DD`. Year-Month-Day with leading zeros (e.g. 2020-02-17)


### administrations
Type: `Administration[]`

The routes of administration of this medication.


### rateQuantity
Type: `Double`

Amount of medication per unit of time, e.g., 2 doses.


### status
Type: `String`

Status of the medication.

Possible values (default is underlined): <ins>`null`</ins>  |  `UNKNOWN` | `NEGATED` | `CONSIDERED` | `INTENDED` |  `INACTIVE`


### brandName
Type: `String`

The specific brand name of a drug given by the producing company.


### category
Type: `String`

Category of the medication.
Possible values (default is underlined):  <ins>`null`</ins> | `ADMISSION` | `DISCHARGE` | `ALLERGY` | `INPATIENT` | `FAMILY` | `CONDITIONING_TREATMENT`



### termTypes
Type: `TTY[]`

Additional information on clinical drug, e.g. semantic clinical drug (RxNorm TermType).
