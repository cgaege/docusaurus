"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9018],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var l=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=l.createContext({}),d=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return l.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),p=d(n),k=i,m=p["".concat(u,".").concat(k)]||p[k]||c[k]||a;return n?l.createElement(m,o(o({ref:t},s),{},{components:n})):l.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=k;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r[p]="string"==typeof e?e:i,o[1]=r;for(var d=2;d<a;d++)o[d]=n[d];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var l=n(7462),i=(n(7294),n(3905));const a={sidebar_position:2},o="Diagnosis",r={unversionedId:"reference/diagnoses",id:"reference/diagnoses",title:"Diagnosis",description:"de.averbis.types.health.Diagnosis",source:"@site/docs/reference/diagnoses.md",sourceDirName:"reference",slug:"/reference/diagnoses",permalink:"/docusaurus/docs/reference/diagnoses",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Template",permalink:"/docusaurus/docs/reference/template"}},u={},d=[{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"dictCanon",id:"dictcanon",level:3},{value:"matchedTerm",id:"matchedterm",level:3},{value:"uniqueID",id:"uniqueid",level:3},{value:"conceptID",id:"conceptid",level:3},{value:"source",id:"source",level:3},{value:"approach",id:"approach",level:3},{value:"confidence",id:"confidence",level:3},{value:"onsetDate",id:"onsetdate",level:3},{value:"negatedBy",id:"negatedby",level:3},{value:"verificationStatus",id:"verificationstatus",level:3},{value:"clinicalStatus",id:"clinicalstatus",level:3},{value:"kind",id:"kind",level:3},{value:"laterality",id:"laterality",level:3},{value:"belongsTo",id:"belongsto",level:3}],s={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"diagnosis"},"Diagnosis"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"de.averbis.types.health.Diagnosis")),(0,i.kt)("p",null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum"),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Example text: ",(0,i.kt)("inlineCode",{parentName:"p"},"suspected history of appendicitis")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="THE DIAGNOSIS OBJECT"',title:'"THE',DIAGNOSIS:!0,'OBJECT"':!0},'{\n  "begin": 10,\n  "end": 33,\n  "type": "de.averbis.types.health.Diagnosis",\n  "coveredText": "history of appendicitis",\n  "id": 899,\n  "negatedBy": null,\n  "matchedTerm": "History of appendicitis",\n  "verificationStatus": "SUSPECTED",\n  "kind": null,\n  "confidence": 0,\n  "onsetDate": null,\n  "source": "ICD10CM_2023",\n  "clinicalStatus": "RESOLVED",\n  "approach": "DictionaryLookup",\n  "laterality": null,\n  "dictCanon": "Personal history of other diseases of the digestive system",\n  "conceptID": "Z87.19",\n  "belongsTo": null,\n  "uniqueID": "ICD10CM_2023:Z87.19"\n}\n')),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{width:"20%"},"Name"),(0,i.kt)("th",{width:"70%"},"Description"),(0,i.kt)("th",{width:"10%"},"Type"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"dictCanon")),(0,i.kt)("td",null,"The matching synonym of the Diagnosis."),(0,i.kt)("td",null,"String")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"matchedTerm")),(0,i.kt)("td",null,"The matching synonym of the Diagnosis."),(0,i.kt)("td",null,"String")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"uniqueID")),(0,i.kt)("td",null,"Unique identifier of a concept of the format ",(0,i.kt)("code",null,"terminologyId:conceptID"),"."),(0,i.kt)("td",null,"String")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"conceptID")),(0,i.kt)("td",null,"The ID of the concept."),(0,i.kt)("td",null,"String")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"source")),(0,i.kt)("td",null,"The name of the terminology source."),(0,i.kt)("td",null,"String")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"approach")),(0,i.kt)("td",null,"Information about the text mining approach used to generate the annotation"),(0,i.kt)("td",null,"String")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"confidence")),(0,i.kt)("td",null,"A decimal number between 0 and 1, which can be interpreted as a percentage of confidence"),(0,i.kt)("td",null,"Double")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"onsetDate")),(0,i.kt)("td",null,"The onset date of the diagnosis, if given in the text"),(0,i.kt)("td",null,"String")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"negatedBy")),(0,i.kt)("td",null,"Specifies the negation word, if one exists"),(0,i.kt)("td",null,"String")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"verificationStatus")),(0,i.kt)("td",null,"Verification status of the actual diagnosis"),(0,i.kt)("td",null,"String")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"clinicalStatus")),(0,i.kt)("td",null,"Clinical status of the actual diagnosis"),(0,i.kt)("td",null,"String")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"kind")),(0,i.kt)("td",null,"The kind of the diagnosis"),(0,i.kt)("td",null,"String")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"laterality")),(0,i.kt)("td",null,"The laterality of the diagnosis"),(0,i.kt)("td",null,"String")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"belongsTo")),(0,i.kt)("td",null,"Indicates, whether the diagnosis belongs to a donor or recipient or to a family member"),(0,i.kt)("td",null,"String")))),(0,i.kt)("h3",{id:"dictcanon"},"dictCanon"),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"String")),(0,i.kt)("p",null,"Preferred term of the condition."),(0,i.kt)("h3",{id:"matchedterm"},"matchedTerm"),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"String")),(0,i.kt)("p",null,"The matching synonym of the Diagnosis."),(0,i.kt)("h3",{id:"uniqueid"},"uniqueID"),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"String")),(0,i.kt)("p",null,"Unique identifier of a concept of the format ",(0,i.kt)("inlineCode",{parentName:"p"},"terminologyId:conceptID")),(0,i.kt)("h3",{id:"conceptid"},"conceptID"),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"String")),(0,i.kt)("p",null,"The ID of the concept."),(0,i.kt)("h3",{id:"source"},"source"),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"String")),(0,i.kt)("p",null,"The name of the terminology source"),(0,i.kt)("h3",{id:"approach"},"approach"),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"String")),(0,i.kt)("p",null,"Information about the text mining approach used to generate the annotation. "),(0,i.kt)("p",null,"Possible values: ",(0,i.kt)("code",null,(0,i.kt)("u",null,"DictionaryLookup"))," | ",(0,i.kt)("code",null,"SimilarityMatching")," | ",(0,i.kt)("code",null,"DocumentClassification")," | ",(0,i.kt)("code",null,"DerivedByLabValue")),(0,i.kt)("h3",{id:"confidence"},"confidence"),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Double")),(0,i.kt)("p",null,"For approaches using machine learning (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"DocumentClassification"),"), the confidence is calculated that the respective annotation has been correctly generated.\nPossible value range: 0-1\nNote: Annotations generated with non-machine learning approaches such as terminology mappings (approach = ",(0,i.kt)("inlineCode",{parentName:"p"},"DictionaryLookup"),") are reflected with a confidence value of 0."),(0,i.kt)("h3",{id:"onsetdate"},"onsetDate"),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"String")),(0,i.kt)("p",null,"The onset date of the diagnosis, if given in the text.\nFormat: ",(0,i.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD"),". Year-Month-Day with leading zeros (e.g. 2020-02-17)\nPlease note: The onsetDate is only annotated if the pear component ",(0,i.kt)("inlineCode",{parentName:"p"},"Disease Onset Date")," is integrated in the text analysis pipeline used. The preconfigured pipelines do not contain this component, thus the value of the onset feature is represented as null."),(0,i.kt)("h3",{id:"negatedby"},"negatedBy"),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"String")),(0,i.kt)("p",null,"Specifies the negation word, if one exists."),(0,i.kt)("h3",{id:"verificationstatus"},"verificationStatus"),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"String")),(0,i.kt)("p",null,"Verification status of the actual diagnosis."),(0,i.kt)("p",null,"Possible values (default is underlined): ",(0,i.kt)("ins",null,(0,i.kt)("inlineCode",{parentName:"p"},"null"))," | ",(0,i.kt)("inlineCode",{parentName:"p"},"NEGATED")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"ASSURED")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"SUSPECTED")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"DIFFERENTIAL")),(0,i.kt)("h3",{id:"clinicalstatus"},"clinicalStatus"),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"String")),(0,i.kt)("p",null,"Clinical status of the actual diagnosis."),(0,i.kt)("p",null,"Possible values (default is underlined): ",(0,i.kt)("ins",null,(0,i.kt)("inlineCode",{parentName:"p"},"null"))," | ",(0,i.kt)("inlineCode",{parentName:"p"},"RESOLVED")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"CHRONIC")),(0,i.kt)("h3",{id:"kind"},"kind"),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"String")),(0,i.kt)("p",null,"The kind of the diagnosis."),(0,i.kt)("p",null,"Possible values (default is underlined): ",(0,i.kt)("ins",null,(0,i.kt)("inlineCode",{parentName:"p"},"null"))," | ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"secondary")),(0,i.kt)("h3",{id:"laterality"},"laterality"),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"String")),(0,i.kt)("p",null,"The laterality of the diagnosis."),(0,i.kt)("p",null,"Possible values (default is underlined): ",(0,i.kt)("ins",null,(0,i.kt)("inlineCode",{parentName:"p"},"null"))," | ",(0,i.kt)("inlineCode",{parentName:"p"},"RIGHT")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"LEFT")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"BOTH")),(0,i.kt)("h3",{id:"belongsto"},"belongsTo"),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"String")),(0,i.kt)("p",null,"Indicates, whether the diagnosis belongs to a donor or recipient (e.g. in case of transplantations) or to a family member."),(0,i.kt)("p",null,"Possible values (default is underlined): ",(0,i.kt)("ins",null,(0,i.kt)("inlineCode",{parentName:"p"},"null"))," | ",(0,i.kt)("inlineCode",{parentName:"p"},"FAMILY")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"OTHER")))}c.isMDXComponent=!0}}]);