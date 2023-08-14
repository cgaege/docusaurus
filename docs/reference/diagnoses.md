---
sidebar_position: 2
---

# Diagnosis

`de.averbis.types.health.Diagnosis`

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum


## Example

Example text: `suspected history of appendicitis`

```js title="THE DIAGNOSIS OBJECT"
{
  "begin": 10,
  "end": 33,
  "type": "de.averbis.types.health.Diagnosis",
  "coveredText": "history of appendicitis",
  "id": 899,
  "negatedBy": null,
  "matchedTerm": "History of appendicitis",
  "verificationStatus": "SUSPECTED",
  "kind": null,
  "confidence": 0,
  "onsetDate": null,
  "source": "ICD10CM_2023",
  "clinicalStatus": "RESOLVED",
  "approach": "DictionaryLookup",
  "laterality": null,
  "dictCanon": "Personal history of other diseases of the digestive system",
  "conceptID": "Z87.19",
  "belongsTo": null,
  "uniqueID": "ICD10CM_2023:Z87.19"
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
      <td>The matching synonym of the Diagnosis.</td>
      <td>String</td>
    </tr>
    <tr>
      <td><b>matchedTerm</b></td>
      <td>The matching synonym of the Diagnosis.</td>
      <td>String</td>
    </tr>
    <tr>
      <td><b>uniqueID</b></td>
      <td>Unique identifier of a concept of the format <code>terminologyId:conceptID</code>.</td>
      <td>String</td>
    </tr>
    <tr>
        <td><b>conceptID</b></td>
        <td>The ID of the concept.</td>
        <td>String</td>
    </tr>
     <tr>
      <td><b>source</b></td>
      <td>The name of the terminology source.</td>
      <td>String</td>
    </tr>
     <tr>
      <td><b>approach</b></td>
      <td>Information about the text mining approach used to generate the annotation</td>
      <td>String</td>
    </tr>
    <tr>
      <td><b>confidence</b></td>
      <td>A decimal number between 0 and 1, which can be interpreted as a percentage of confidence</td>
      <td>Double</td>
    </tr>
     <tr>
      <td><b>onsetDate</b></td>
      <td>The onset date of the diagnosis, if given in the text</td>
      <td>String</td>
    </tr>
     <tr>
      <td><b>negatedBy</b></td>
      <td>Specifies the negation word, if one exists</td>
      <td>String</td>
    </tr>
     <tr>
      <td><b>verificationStatus</b></td>
      <td>Verification status of the actual diagnosis</td>
      <td>String</td>
    </tr>
     <tr>
      <td><b>clinicalStatus</b></td>
      <td>Clinical status of the actual diagnosis</td>
      <td>String</td>
    </tr>
     <tr>
      <td><b>kind</b></td>
      <td>The kind of the diagnosis</td>
      <td>String</td>
    </tr>
    <tr>
      <td><b>laterality</b></td>
      <td>The laterality of the diagnosis</td>
      <td>String</td>
    </tr>
    <tr>
      <td><b>belongsTo</b></td>
      <td>Indicates, whether the diagnosis belongs to a donor or recipient or to a family member</td>
      <td>String</td>
    </tr>

  </tbody>
</table>


### dictCanon 
Type: `String`

Preferred term of the condition.

---

### matchedTerm
Type: `String`

The matching synonym of the Diagnosis.

---

### uniqueID
Type: `String`

Unique identifier of a concept of the format `terminologyId:conceptID`

---

### conceptID
Type: `String`

The ID of the concept.

---

### source
Type: `String`

The name of the terminology source


---

### approach 
Type: `String`

Information about the text mining approach used to generate the annotation. 

Possible values: <code><u>DictionaryLookup</u></code> | <code>SimilarityMatching</code> | <code>DocumentClassification</code> | <code>DerivedByLabValue</code>

---

### confidence
Type: `Double`

For approaches using machine learning (e.g. `DocumentClassification`), the confidence is calculated that the respective annotation has been correctly generated.
Possible value range: 0-1

:::note
Annotations generated with non-machine learning approaches such as `DictionaryLookup` are reflected with a confidence value of `0`.
:::

---

### onsetDate
Type: `String`

The onset date of the diagnosis, if given in the text.
Format: `YYYY-MM-DD`. Year-Month-Day with leading zeros (e.g. 2020-02-17)

:::info

The onsetDate is only annotated if the pear component `Disease Onset Date` is integrated in the text analysis pipeline used. The preconfigured pipelines do not contain this component, thus the value of the onset feature is represented as `null`.

:::

---

### negatedBy
Type: `String`

Specifies the negation word, if one exists.


---

### verificationStatus
Type: `String`

Verification status of the actual diagnosis.

Possible values (default is underlined): <ins>`null`</ins> | `NEGATED` | `ASSURED` | `SUSPECTED` | `DIFFERENTIAL`

---


### clinicalStatus
Type: `String`

Clinical status of the actual diagnosis.

Possible values (default is underlined): <ins>`null`</ins> | `RESOLVED` | `CHRONIC`

---

### kind
Type: `String`

The kind of the diagnosis.

Possible values (default is underlined): <ins>`null`</ins> | `main` | `secondary`

---


### laterality
Type: `String`

The laterality of the diagnosis.

Possible values (default is underlined): <ins>`null`</ins> | `RIGHT` | `LEFT` | `BOTH`

---

### belongsTo
Type: `String`

Indicates, whether the diagnosis belongs to a donor or recipient (e.g. in case of transplantations) or to a family member.

Possible values (default is underlined): <ins>`null`</ins> | `FAMILY` | `OTHER`





