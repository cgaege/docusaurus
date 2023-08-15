---
sidebar_position: 8
---

# DateInterval

`de.averbis.types.health.DateInterval`

## Example

```js title="THE DATEINTERVAL OBJECT"
{
  "begin": 99,
  "end": 124,
  "type": "de.averbis.types.health.DateInterval",
  "coveredText": "vom 18.11. bis 20.11.2008",
  "id": 1857,
  "endDate": "2008-11-20",
  "kind": "DATEINTERVAL",
  "value": "[2008-11-18, 2008-11-20]",
  "startDate": "2008-11-18"
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
      <td><b>kind</b></td>
      <td>Kind of the date information</td>
      <td>String</td>
    </tr>
     <tr>
      <td><b>value</b></td>
      <td>Value of the date</td>
      <td>String</td>
    </tr>
    <tr>
      <td><b>startDate</b></td>
      <td>First date of the date interval</td>
      <td>String</td>
    </tr>
    <tr>
      <td><b>endDate</b></td>
      <td>Second date of the date interval</td>
      <td>String</td>
    </tr>
  </tbody>
</table>


### kind 
Type: `String`

Kind of the date information, here: `DATEINTERVAL`.

---

### value
Type: `String`

Value of the date.

Format: `YYYY-MM-DD`. Year-Month-Day with leading zeros (e.g. 2020-02-17)

---

### startDate
Type: `String`

First date of the date interval

---


### endDate
Type: `String`

Second date of the date interval
