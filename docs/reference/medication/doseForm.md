---
sidebar_position: 5
---

# DoseForm

` de.averbis.types.health.DoseForm`

## Example

```js title="THE DOSEFORM OBJECT"
{
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







