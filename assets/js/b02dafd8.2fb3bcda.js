"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7036],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),d=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return l.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=d(n),k=r,m=p["".concat(u,".").concat(k)]||p[k]||s[k]||o;return n?l.createElement(m,i(i({ref:t},c),{},{components:n})):l.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=k;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:r,i[1]=a;for(var d=2;d<o;d++)i[d]=n[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7624:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var l=n(7462),r=(n(7294),n(3905));const o={sidebar_position:6},i="DoseFrequency",a={unversionedId:"reference/medication/dosefrequency/doseFrequency",id:"reference/medication/dosefrequency/doseFrequency",title:"DoseFrequency",description:"de.averbis.types.health.DoseFrequency",source:"@site/docs/reference/medication/dosefrequency/doseFrequency.md",sourceDirName:"reference/medication/dosefrequency",slug:"/reference/medication/dosefrequency/",permalink:"/health-discovery/docs/reference/medication/dosefrequency/",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Strength",permalink:"/health-discovery/docs/reference/medication/drug/strength"},next:{title:"Measurement",permalink:"/health-discovery/docs/reference/medication/dosefrequency/measurement"}},u={},d=[{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"dictCanon",id:"dictcanon",level:3},{value:"matchedTerm",id:"matchedterm",level:3},{value:"uniqueID",id:"uniqueid",level:3},{value:"conceptID",id:"conceptid",level:3},{value:"source",id:"source",level:3},{value:"negatedBy",id:"negatedby",level:3},{value:"interval",id:"interval",level:3},{value:"totalCount",id:"totalcount",level:3},{value:"totalDose",id:"totaldose",level:3},{value:"morning / midday / evening / atNight",id:"morning--midday--evening--atnight",level:3},{value:"monday / tuesday / \u2026 / sunday",id:"monday--tuesday----sunday",level:3}],c={toc:d},p="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dosefrequency"},"DoseFrequency"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"de.averbis.types.health.DoseFrequency")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="THE DOSEFREQUENCY OBJECT"',title:'"THE',DOSEFREQUENCY:!0,'OBJECT"':!0},'{\n  "begin": 42,\n  "end": 47,\n  "type": "de.averbis.types.health.TimeMeasurementDoseFrequency",\n  "coveredText": "daily",\n  "id": 2169,\n  "negatedBy": null,\n  "totalDose": {\n    "begin": 42,\n    "end": 47,\n    "type": "de.averbis.types.health.Measurement",\n    "coveredText": "daily",\n    "id": 2170,\n    "unit": "mg",\n    "normalizedUnit": null,\n    "normalizedValue": "NaN",\n    "value": 5,\n    "dimension": "[M]"\n  },\n  "matchedTerm": "Daily",\n  "dictCanon": "Daily (qualifier value)",\n  "conceptID": "69620002",\n  "interval": "1/day",\n  "source": "DoseFrequency_1.0",\n  "totalCount": 1,\n  "uniqueID": "DoseFrequency_1.0:69620002"\n}\n')),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{width:"20%"},"Name"),(0,r.kt)("th",{width:"70%"},"Description"),(0,r.kt)("th",{width:"10%"},"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"dictCanon")),(0,r.kt)("td",null,"Preferred term of the dose form"),(0,r.kt)("td",null,"String")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"matchedTerm")),(0,r.kt)("td",null,"Matching synonym of the dose form"),(0,r.kt)("td",null,"String")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"uniqueID")),(0,r.kt)("td",null,"Unique identifier of the dose form of the format ",(0,r.kt)("code",null,"terminologyId:conceptID")),(0,r.kt)("td",null,"String")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"conceptID")),(0,r.kt)("td",null,"The concept Id"),(0,r.kt)("td",null,"String")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"source")),(0,r.kt)("td",null,"The name of the terminology source"),(0,r.kt)("td",null,"String")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"negatedBy")),(0,r.kt)("td",null,"Specifies the negation word, if one exists"),(0,r.kt)("td",null,"String")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"interval")),(0,r.kt)("td",null,"The taking interval of a medication, e.g. day, week, month etc"),(0,r.kt)("td",null,"String")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"totalCount")),(0,r.kt)("td",null,"Total count of taken drug units per interval"),(0,r.kt)("td",null,"Double")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"totalDose")),(0,r.kt)("td",null,"Total dose of taken drug per interval"),(0,r.kt)("td",null,"Measurement")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"morning / midday / evening / atNight")),(0,r.kt)("td",null,"Only available for ",(0,r.kt)("code",null,"DayTimeDoseFrequency"),". Represents the count of drug units to be taken at the different daytimes"),(0,r.kt)("td",null,"Double")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"monday / tuesday / \u2026 / sunday")),(0,r.kt)("td",null,"Only available for ",(0,r.kt)("code",null,"WeekTimeDoseFrequency"),". Represents the count of drug units to be taken at the different week days"),(0,r.kt)("td",null,"Double")))),(0,r.kt)("h3",{id:"dictcanon"},"dictCanon"),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"String")),(0,r.kt)("p",null,"Preferred term of the dose form."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"matchedterm"},"matchedTerm"),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"String")),(0,r.kt)("p",null,"Matching synonym of the dose form."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"uniqueid"},"uniqueID"),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"String")),(0,r.kt)("p",null,"Unique identifier of the dose form of the format ",(0,r.kt)("inlineCode",{parentName:"p"},"terminologyId:conceptID"),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"conceptid"},"conceptID"),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"String")),(0,r.kt)("p",null,"The concept Id"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"source"},"source"),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"String")),(0,r.kt)("p",null,"The name of the terminology source."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"negatedby"},"negatedBy"),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"String")),(0,r.kt)("p",null,"Specifies the negation word, if one exists."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"interval"},"interval"),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"String")),(0,r.kt)("p",null,"The taking interval of a medication, e.g. day, week, month etc"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"totalcount"},"totalCount"),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Double")),(0,r.kt)("p",null,"Total count of taken drug units per interval"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"totaldose"},"totalDose"),(0,r.kt)("p",null,"Type: ",(0,r.kt)("a",{parentName:"p",href:"/health-discovery/docs/reference/medication/dosefrequency/measurement"},(0,r.kt)("inlineCode",{parentName:"a"},"Measurement"))),(0,r.kt)("p",null,"Total dose of taken drug per interval"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"morning--midday--evening--atnight"},"morning / midday / evening / atNight"),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Double")),(0,r.kt)("p",null,"Represents the count of drug units to be taken at the different daytimes."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Only available for ",(0,r.kt)("inlineCode",{parentName:"p"},"DayTimeDoseFrequency")," ")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"monday--tuesday----sunday"},"monday / tuesday / \u2026 / sunday"),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Double")),(0,r.kt)("p",null,"Represents the count of drug units to be taken at the different week days."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Only available for ",(0,r.kt)("inlineCode",{parentName:"p"},"WeekTimeDoseFrequency")," ")))}s.isMDXComponent=!0}}]);