---
sidebar_position: 1
---

# Ingredient

`de.averbis.types.health.Ingredient`

## Example

```js title="THE INGREDIENT OBJECT"
{
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
      <td>Preferred term of Ingredient</td>
      <td>String</td>
    </tr>
    <tr>
      <td><b>matchedTerm</b></td>
      <td>Matching synonym of Ingredient</td>
      <td>String</td>
    </tr>
    <tr>
      <td><b>uniqueID</b></td>
      <td>Unique identifier of Ingredient of the format <code>terminologyId:conceptID</code></td>
      <td>String</td>
    </tr>
    <tr>
      <td><b>conceptID</b></td>
      <td>The concept Id.</td>
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

Preferred term of Ingredient.

---


### matchedTerm
Type: `String`

Matching synonym of Ingredient.

---

### uniqueID
Type: `String`

Unique identifier of Ingredient of the format `terminologyId:conceptID`.

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
