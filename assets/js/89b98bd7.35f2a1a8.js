"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[505],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>y});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=i.createContext({}),c=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(d.Provider,{value:n},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(t),h=a,y=s["".concat(d,".").concat(h)]||s[h]||p[h]||r;return t?i.createElement(y,l(l({ref:n},u),{},{components:t})):i.createElement(y,l({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=h;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=t[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},3349:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(7462),a=(t(7294),t(3905));const r={sidebar_position:5},l="Analyse health text data",o={unversionedId:"quickstart/analyse-text",id:"quickstart/analyse-text",title:"Analyse health text data",description:"Analyse health text with the discharge pipeline.",source:"@site/docs/quickstart/analyse-text.md",sourceDirName:"quickstart",slug:"/quickstart/analyse-text",permalink:"/docusaurus/docs/quickstart/analyse-text",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Start a pipeline",permalink:"/docusaurus/docs/quickstart/start-a-pipeline"},next:{title:"Summary and clean up",permalink:"/docusaurus/docs/quickstart/summary-and-clean-up"}},d={},c=[],u={toc:c},s="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"analyse-health-text-data"},"Analyse health text data"),(0,a.kt)("p",null,"Analyse health text with the ",(0,a.kt)("inlineCode",{parentName:"p"},"discharge")," pipeline."),(0,a.kt)("p",null,"Please replace ",(0,a.kt)("inlineCode",{parentName:"p"},"YOUR-API-TOKEN")," with your API token."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="POST /v1/textanalysis/projects/{projectName}/pipelines/{pipelineName}/analyseText" showLineNumbers',title:'"POST','/v1/textanalysis/projects/{projectName}/pipelines/{pipelineName}/analyseText"':!0,showLineNumbers:!0},'curl -X POST "http://localhost:8080/health-discovery/rest/v1/textanalysis/projects/quickstart/pipelines/discharge/analyseText?language=de" \\\n-H "accept: application/json;charset=UTF-8" \\\n-H "api-token: YOUR-API-TOKEN" \\\n-H "Content-Type: text/plain" \\\n-d "Der Patient leidet unter einer Struma diffusa, welche mit Jodid 200\xb5g 1-0-0behandelt wird. Keine Anzeichen auf Bluthochdruck, derzeitiger Blutdruck 120/80."\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The first pipeline request takes a little longer because pipeline resources have to be initialized.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=RESPONSE",title:"RESPONSE"},'{\n  "payload": [\n    {\n      "begin": 58,\n      "end": 75,\n      "type": "de.averbis.types.health.Medication",\n      "coveredText": "Jodid 200\xb5g 1-0-0",\n      "id": 3721,\n      "date": null,\n      "dosage": [\n        {\n          "begin": 64,\n          "end": 75,\n          "type": "de.averbis.types.health.Dosage",\n          "coveredText": "200\xb5g 1-0-0",\n          "id": 3728\n        }\n      ],\n      "administrations": [],\n      "brandName": "Jodid 200",\n      "drugs": [\n        {\n          "begin": 58,\n          "end": 69,\n          "type": "de.averbis.types.health.Drug",\n          "coveredText": "Jodid 200\xb5g",\n          "id": 3722,\n          "ingredient": {\n            "begin": 58,\n            "end": 67,\n            "type": "de.averbis.types.health.Ingredient",\n            "coveredText": "Jodid 200",\n            "id": 3723,\n            "negatedBy": null,\n            "matchedTerm": "Jodid 200",\n            "dictCanon": "Kaliumiodid",\n            "conceptID": "157400",\n            "source": "ABDAMED_202307",\n            "uniqueID": "ABDAMED_202307:157400"\n          },\n          "strength": {\n            "begin": 64,\n            "end": 69,\n            "type": "de.averbis.types.health.Strength",\n            "coveredText": "200\xb5g",\n            "id": 3724,\n            "negatedBy": null,\n            "unit": "\xb5g",\n            "matchedTerm": null,\n            "dictCanon": null,\n            "conceptID": null,\n            "normalizedUnit": "kg",\n            "source": null,\n            "normalizedValue": 2e-7,\n            "value": 200,\n            "dimension": "[M]",\n            "uniqueID": null\n          }\n        }\n      ],\n      "rateQuantity": "NaN",\n      "atcCodes": [\n        {\n          "begin": 58,\n          "end": 69,\n          "type": "de.averbis.types.health.ATCCode",\n          "coveredText": "Jodid 200\xb5g",\n          "id": 3734,\n          "negatedBy": null,\n          "matchedTerm": null,\n          "dictCanon": "Iodide",\n          "conceptID": "H03CA01",\n          "source": "ATCA_2023",\n          "uniqueID": null\n        }\n      ],\n      "doseFrequency": {\n        "begin": 70,\n        "end": 75,\n        "type": "de.averbis.types.health.DayTimeDoseFrequency",\n        "coveredText": "1-0-0",\n        "id": 3729,\n        "negatedBy": null,\n        "midday": 0,\n        "matchedTerm": null,\n        "source": null,\n        "totalCount": 1,\n        "atNight": "NaN",\n        "morning": 1,\n        "totalDose": {\n          "begin": 70,\n          "end": 75,\n          "type": "de.averbis.types.health.Measurement",\n          "coveredText": "1-0-0",\n          "id": 3730,\n          "unit": "\xb5g",\n          "normalizedUnit": null,\n          "normalizedValue": "NaN",\n          "value": 200,\n          "dimension": "[M]"\n        },\n        "dictCanon": null,\n        "conceptID": null,\n        "interval": "daytime",\n        "evening": 0,\n        "uniqueID": null\n      },\n      "atc": "H03CA01",\n      "termTypes": null,\n      "doseForm": null,\n      "category": null,\n      "status": null\n    },\n    {\n      "begin": 0,\n      "end": 156,\n      "type": "de.averbis.types.health.PatientInformation",\n      "coveredText": "Der Patient leidet unter einer Struma diffusa, welche mit Jodid 200\xb5g 1-0-0\\nbehandelt wird. Keine Anzeichen auf Bluthochdruck, derzeitiger Blutdruck 120/80.",\n      "id": 3735,\n      "firstName": null,\n      "lastName": null,\n      "deceased": false,\n      "gender": "male",\n      "deathDate": null\n    },\n    {\n      "begin": 139,\n      "end": 155,\n      "type": "de.averbis.types.health.BloodPressure",\n      "coveredText": "Blutdruck 120/80",\n      "id": 3714,\n      "systolic": {\n        "begin": 149,\n        "end": 152,\n        "type": "de.averbis.types.health.Measurement",\n        "coveredText": "120",\n        "id": 3715,\n        "unit": "mmHg",\n        "normalizedUnit": "kg/(m\xb7s\xb2)",\n        "normalizedValue": 15998.64,\n        "value": 120,\n        "dimension": null\n      },\n      "diastolic": {\n        "begin": 153,\n        "end": 155,\n        "type": "de.averbis.types.health.Measurement",\n        "coveredText": "80",\n        "id": 3716,\n        "unit": "mmHg",\n        "normalizedUnit": "kg/(m\xb7s\xb2)",\n        "normalizedValue": 10665.76,\n        "value": 80,\n        "dimension": null\n      },\n      "interpretation": null\n    },\n    {\n      "begin": 92,\n      "end": 156,\n      "type": "de.averbis.types.health.ClinicalSection",\n      "coveredText": "Keine Anzeichen auf Bluthochdruck, derzeitiger Blutdruck 120/80.",\n      "id": 3718,\n      "label": "VitalSign",\n      "keyword": {\n        "begin": 139,\n        "end": 148,\n        "type": "de.averbis.types.health.ClinicalSectionKeyword",\n        "coveredText": "Blutdruck",\n        "id": 3717,\n        "negatedBy": null,\n        "matchedTerm": "Blutdruck",\n        "dictCanon": "Vitalzeichen",\n        "conceptID": "8716-3",\n        "source": "clinical_sections_de",\n        "uniqueID": "clinical_sections_de:8716-3"\n      }\n    },\n    {\n      "begin": 31,\n      "end": 45,\n      "type": "de.averbis.types.health.Diagnosis",\n      "coveredText": "Struma diffusa",\n      "id": 3719,\n      "negatedBy": null,\n      "matchedTerm": "Struma diffusa",\n      "verificationStatus": null,\n      "kind": null,\n      "confidence": 0,\n      "onsetDate": null,\n      "source": "ICD10GM_2023",\n      "clinicalStatus": "CHRONIC",\n      "approach": "DictionaryLookup",\n      "laterality": null,\n      "dictCanon": "Nichttoxische diffuse Struma",\n      "conceptID": "E04.0",\n      "belongsTo": null,\n      "uniqueID": "ICD10GM_2023:E04.0"\n    },\n    {\n      "begin": 112,\n      "end": 125,\n      "type": "de.averbis.types.health.Diagnosis",\n      "coveredText": "Bluthochdruck",\n      "id": 3720,\n      "negatedBy": "Keine",\n      "matchedTerm": "Bluthochdruck",\n      "verificationStatus": "NEGATED",\n      "kind": null,\n      "confidence": 0,\n      "onsetDate": null,\n      "source": "ICD10GM_2023",\n      "clinicalStatus": "CHRONIC",\n      "approach": "DictionaryLookup",\n      "laterality": null,\n      "dictCanon": "Essentielle Hypertonie, nicht n\xe4her bezeichnet: Ohne Angabe einer hypertensiven Krise",\n      "conceptID": "I10.90",\n      "belongsTo": null,\n      "uniqueID": "ICD10GM_2023:I10.90"\n    },\n    {\n      "begin": 139,\n      "end": 148,\n      "type": "de.averbis.types.health.ClinicalSectionKeyword",\n      "coveredText": "Blutdruck",\n      "id": 3717,\n      "negatedBy": null,\n      "matchedTerm": "Blutdruck",\n      "dictCanon": "Vitalzeichen",\n      "conceptID": "8716-3",\n      "source": "clinical_sections_de",\n      "uniqueID": "clinical_sections_de:8716-3"\n    },\n    {\n      "begin": 0,\n      "end": 156,\n      "type": "de.averbis.types.health.DocumentAnnotation",\n      "coveredText": "Der Patient leidet unter einer Struma diffusa, welche mit Jodid 200\xb5g 1-0-0\\nbehandelt wird. Keine Anzeichen auf Bluthochdruck, derzeitiger Blutdruck 120/80.",\n      "id": 3713,\n      "language": "de",\n      "version": "6.19.0"\n    }\n  ],\n  "errorMessages": []\n}\n')),(0,a.kt)("p",null,"Congratulations, you have successfully structured your first health text example with Health Discovery."))}p.isMDXComponent=!0}}]);