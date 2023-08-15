---
sidebar_position: 3
---

# DocumentAnnotation

`de.averbis.types.health.DocumentAnnotation`

The `DocumentAnnoation` contains text analysis meta information like the document language and the health discovery version that was used to analyse the text.




## Example

Example text: `this is a sample text.`

```js title="THE DOCUMENTANNOTATION OBJECT"
{
  "begin": 0,
  "end": 22,
  "type": "de.averbis.types.health.DocumentAnnotation",
  "coveredText": "this is a sample text.",
  "id": 678,
  "language": "en",
  "version": "6.19.0"
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
      <td><b>language</b></td>
      <td>The text language that was detected or specified</td>
      <td>String</td>
    </tr>
    <tr>
      <td><b>version</b></td>
      <td>The health discovery version that was used to analyse the text</td>
      <td>String</td>
    </tr>
   
  </tbody>
</table>


### language 
Type: `String`

The text language that was detected or specified

---

### version
Type: `String`

The health discovery version that was used to analyse the text

