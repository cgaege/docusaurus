---
sidebar_position: 2
---

# Drug

`de.averbis.types.health.Drug`

## Example

```js title="THE DRUG OBJECT"
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
      <td><b>ingredient</b></td>
      <td>Ingredient of the drug.</td>
      <td>Ingredient</td>
    </tr>
    <tr>
      <td><b>strength</b></td>
      <td>Strength of the drug.</td>
      <td>Strength</td>
    </tr>
  

  </tbody>
</table>


### ingredient 
Type: [`Ingredient`](./ingredient.md)

Ingredient of the drug.

---

### strength
Type: [`Strength`](./strength.md)

Strength of the drug.
