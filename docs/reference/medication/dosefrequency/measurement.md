---
sidebar_position: 2
---

# Measurement

`de.averbis.types.health.Measurement`

## Example

```js title="THE MEASUREMENT OBJECT"
{
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
      <td><b>normalizedValue</b></td>
      <td>Normalized value of the measurement</td>
      <td>Double</td>
    </tr>
     <tr>
      <td><b>value</b></td>
      <td>The numeric value of the measurement</td>
      <td>Double</td>
    </tr>
    <tr>
      <td><b>dimension</b></td>
      <td>The dimension of the unit,</td>
      <td>String</td>
    </tr>
  

  </tbody>
</table>


### unit 
Type: `String`

The unit of the measurement

---

### normalizedUnit
Type: `String`

Normalized string value of the unit

---

### normalizedValue
Type: `Double`

Normalized value of the measurement. This value is the result of the transformation of the numeric value according to the transformation of the unit to its standard unit.


---

### value
Type: `Double`

The numeric value of the measurement


---

### dimension
Type: `String`

The dimension of the unit