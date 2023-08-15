---
sidebar_position: 7
---

# Date

`de.averbis.types.health.Date`

## Example

```js title="THE DATE OBJECT"
{
  "begin": 3,
  "end": 13,
  "type": "de.averbis.types.health.Date",
  "coveredText": "11/11/2008",
  "id": 1840,
  "kind": "DATE",
  "value": "2008-11-11"
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
      <td><b>day</b></td>
      <td>This feature labels the day of the date</td>
      <td>String</td>
    </tr>
    <tr>
      <td><b>month</b></td>
      <td>This feature labels the month of the date</td>
      <td>String</td>
    </tr>
    <tr>
      <td><b>year</b></td>
      <td>This feature labels the year of the date</td>
      <td>String</td>
    </tr>
  </tbody>
</table>


### kind 
Type: `String`

Kind of the date information, here: `DATE`.

---

### value
Type: `String`

Value of the date.

Format: `YYYY-MM-DD`. Year-Month-Day with leading zeros (e.g. 2020-02-17)

---

### day
Type: `String`

This feature labels the day of the date

---


### month
Type: `String`

This feature labels the month of the date

---

### year
Type: `String`

This feature labels the year of the date