---
sidebar_position: 8
---

# TTY

`de.averbis.types.health.TTY`


## Example

```js title="THE TTY OBJECT"
{
  "begin": 0,
  "end": 28,
  "type": "de.averbis.types.health.TTY",
  "coveredText": "Ibuprofen 400 MG Oral Tablet",
  "id": 1617,
  "code": "217693",
  "kind": "BN",
  "description": "Ibu"
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
      <td><b>code</b></td>
      <td>Term type code for the medication</td>
      <td>String</td>
    </tr>
     <tr>
      <td><b>kind</b></td>
      <td>The kind of the term type</td>
      <td>String</td>
    </tr>
    <tr>
      <td><b>description</b></td>
      <td>Term type description for the medication</td>
      <td>String</td>
    </tr>
  </tbody>
</table>


### code 
Type: `String`

Term type code for the medication

---

### kind
Type: `String`

The kind of the term type, e.g. `IN` for ingredient, `SCD` for semantic clinical drug

---

### description
Type: `String`

Term type description for the medication
