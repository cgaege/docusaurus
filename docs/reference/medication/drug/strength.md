---
sidebar_position: 2
---

# Strength

`de.averbis.types.health.Strength`

## Example

```js title="THE STRENGTH OBJECT"
{
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
      <td>Preferred term of strength</td>
      <td>String</td>
    </tr>
     <tr>
      <td><b>matchedTerm</b></td>
      <td>Matching synonym of strength</td>
      <td>String</td>
    </tr>
    <tr>
      <td><b>uniqueID</b></td>
      <td>Unique identifier of Ingredient of the format <code>terminologyId:conceptID</code></td>
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
      <td><b>unit</b></td>
      <td>The unit of the measurement</td>
      <td>String</td>
    </tr>
    <tr>
      <td><b>normalizedUnit</b></td>
      <td>Normalized string value of the unit</td>
      <td>String</td>
    </tr>
    <tr>
      <td><b>dimension</b></td>
      <td>The dimension of the unit</td>
      <td>String</td>
    </tr>
    <tr>
      <td><b>value</b></td>
      <td>The numeric value of the measurement</td>
      <td>String</td>
    </tr>
    <tr>
      <td><b>normalizedValue</b></td>
      <td>Normalized value of the measurement</td>
      <td>String</td>
    </tr>

  </tbody>
</table>


### dictCanon 
Type: `String`

Preferred term of Strength.

---

### matchedTerm
Type: `String`

Matching synonym of Strength.

---

### uniqueID
Type: `String`

Unique identifier of Strength of the format `terminologyId:conceptID`.

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

### unit
Type: `String`

The unit of the measurement.


---

### normalizedUnit
Type: `String`

Normalized string value of the unit


---

### dimension
Type: `String`

The dimension of the unit

---

### value
Type: `String`

The numeric value of the measurement

---

### normalizedValue
Type: `String`

Normalized value of the measurement. This value is the result of the transformation of the numeric value according to the transformation of the unit to its standard unit.

