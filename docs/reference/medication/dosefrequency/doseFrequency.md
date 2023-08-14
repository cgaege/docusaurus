---
sidebar_position: 6
---

# DoseFrequency

`de.averbis.types.health.DoseFrequency`

## Example

```js title="THE DOSEFREQUENCY OBJECT"
{
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
      <td><b>dictCanon</b></td>
      <td>Preferred term of the dose form</td>
      <td>String</td>
    </tr>
     <tr>
      <td><b>matchedTerm</b></td>
      <td>Matching synonym of the dose form</td>
      <td>String</td>
    </tr>
    <tr>
      <td><b>uniqueID</b></td>
      <td>Unique identifier of the dose form of the format <code>terminologyId:conceptID</code></td>
      <td>String</td>
    </tr>
    <tr>
      <td><b>conceptID</b></td>
      <td>The concept Id</td>
      <td>String</td>
    </tr>
    <tr>
      <td><b>source</b></td>
      <td>The name of the terminology source</td>
      <td>String</td>
    </tr>
    <tr>
      <td><b>negatedBy</b></td>
      <td>Specifies the negation word, if one exists</td>
      <td>String</td>
    </tr>
     <tr>
      <td><b>interval</b></td>
      <td>The taking interval of a medication, e.g. day, week, month etc</td>
      <td>String</td>
    </tr>
    <tr>
      <td><b>totalCount</b></td>
      <td>Total count of taken drug units per interval</td>
      <td>Double</td>
    </tr>
    <tr>
      <td><b>totalDose</b></td>
      <td>Total dose of taken drug per interval</td>
      <td>Measurement</td>
    </tr>
     <tr>
      <td><b>morning / midday / evening / atNight</b></td>
      <td>Only available for <code>DayTimeDoseFrequency</code>. Represents the count of drug units to be taken at the different daytimes</td>
      <td>Double</td>
    </tr>
    <tr>
      <td><b>monday / tuesday / … / sunday</b></td>
      <td>Only available for <code>WeekTimeDoseFrequency</code>. Represents the count of drug units to be taken at the different week days</td>
      <td>Double</td>
    </tr>
  </tbody>
</table>


### dictCanon 
Type: `String`

Preferred term of the dose form.

---

### matchedTerm
Type: `String`

Matching synonym of the dose form.

---

### uniqueID
Type: `String`

Unique identifier of the dose form of the format `terminologyId:conceptID`.

---


### conceptID
Type: `String`

The concept Id

---

### source
Type: `String`

The name of the terminology source.

---

### negatedBy
Type: `String`

Specifies the negation word, if one exists.


---

### interval
Type: `String`

The taking interval of a medication, e.g. day, week, month etc


---

### totalCount
Type: `Double`

Total count of taken drug units per interval


---

### totalDose
Type: [`Measurement`](./measurement.md)

Total dose of taken drug per interval


---

### morning / midday / evening / atNight
Type: `Double`

Represents the count of drug units to be taken at the different daytimes.

:::info

Only available for `DayTimeDoseFrequency` 

:::


---

### monday / tuesday / … / sunday
Type: `Double`

Represents the count of drug units to be taken at the different week days.

:::info

Only available for `WeekTimeDoseFrequency` 

:::
