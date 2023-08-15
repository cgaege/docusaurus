"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5036],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=d(n),p=l,f=m["".concat(o,".").concat(p)]||m[p]||c[p]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=p;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[m]="string"==typeof e?e:l,a[1]=u;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=n(7462),l=(n(7294),n(3905));const i={sidebar_position:2},a="Measurement",u={unversionedId:"reference/medication/dosefrequency/measurement",id:"reference/medication/dosefrequency/measurement",title:"Measurement",description:"de.averbis.types.health.Measurement",source:"@site/docs/reference/medication/dosefrequency/measurement.md",sourceDirName:"reference/medication/dosefrequency",slug:"/reference/medication/dosefrequency/measurement",permalink:"/docusaurus/docs/reference/medication/dosefrequency/measurement",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"DoseFrequency",permalink:"/docusaurus/docs/reference/medication/dosefrequency/"},next:{title:"DoseForm",permalink:"/docusaurus/docs/reference/medication/doseForm"}},o={},d=[{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"unit",id:"unit",level:3},{value:"normalizedUnit",id:"normalizedunit",level:3},{value:"normalizedValue",id:"normalizedvalue",level:3},{value:"value",id:"value",level:3},{value:"dimension",id:"dimension",level:3}],s={toc:d},m="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"measurement"},"Measurement"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"de.averbis.types.health.Measurement")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="THE MEASUREMENT OBJECT"',title:'"THE',MEASUREMENT:!0,'OBJECT"':!0},'{\n  "begin": 42,\n  "end": 47,\n  "type": "de.averbis.types.health.Measurement",\n  "coveredText": "daily",\n  "id": 2170,\n  "unit": "mg",\n  "normalizedUnit": null,\n  "normalizedValue": "NaN",\n  "value": 5,\n  "dimension": "[M]"\n}\n')),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{width:"20%"},"Name"),(0,l.kt)("th",{width:"70%"},"Description"),(0,l.kt)("th",{width:"10%"},"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"unit")),(0,l.kt)("td",null,"The unit of the measurement"),(0,l.kt)("td",null,"String")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"normalizedUnit")),(0,l.kt)("td",null,"Normalized string value of the unit"),(0,l.kt)("td",null,"String")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"normalizedValue")),(0,l.kt)("td",null,"Normalized value of the measurement"),(0,l.kt)("td",null,"Double")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"value")),(0,l.kt)("td",null,"The numeric value of the measurement"),(0,l.kt)("td",null,"Double")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"dimension")),(0,l.kt)("td",null,"The dimension of the unit,"),(0,l.kt)("td",null,"String")))),(0,l.kt)("h3",{id:"unit"},"unit"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"String")),(0,l.kt)("p",null,"The unit of the measurement"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"normalizedunit"},"normalizedUnit"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"String")),(0,l.kt)("p",null,"Normalized string value of the unit"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"normalizedvalue"},"normalizedValue"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"Double")),(0,l.kt)("p",null,"Normalized value of the measurement. This value is the result of the transformation of the numeric value according to the transformation of the unit to its standard unit."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"value"},"value"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"Double")),(0,l.kt)("p",null,"The numeric value of the measurement"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"dimension"},"dimension"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"String")),(0,l.kt)("p",null,"The dimension of the unit"))}c.isMDXComponent=!0}}]);