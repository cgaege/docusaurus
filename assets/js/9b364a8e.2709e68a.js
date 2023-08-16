"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3850],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),g=i,m=p["".concat(u,".").concat(g)]||p[g]||s[g]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},719:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:2},a="Drug",l={unversionedId:"reference/medication/drug/drug",id:"reference/medication/drug/drug",title:"Drug",description:"de.averbis.types.health.Drug",source:"@site/docs/reference/medication/drug/drug.md",sourceDirName:"reference/medication/drug",slug:"/reference/medication/drug/",permalink:"/docusaurus/docs/reference/medication/drug/",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"ATCCode",permalink:"/docusaurus/docs/reference/medication/atcCode"},next:{title:"Ingredient",permalink:"/docusaurus/docs/reference/medication/drug/ingredient"}},u={},d=[{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"ingredient",id:"ingredient",level:3},{value:"strength",id:"strength",level:3}],c={toc:d},p="wrapper";function s(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"drug"},"Drug"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"de.averbis.types.health.Drug")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="THE DRUG OBJECT"',title:'"THE',DRUG:!0,'OBJECT"':!0},'{\n      "begin": 0,\n      "end": 15,\n      "type": "de.averbis.types.health.Drug",\n      "coveredText": "Lisinopril 5 MG",\n      "id": 2159,\n      "ingredient": {\n        "begin": 0,\n        "end": 10,\n        "type": "de.averbis.types.health.Ingredient",\n        "coveredText": "Lisinopril",\n        "id": 2160,\n        "negatedBy": null,\n        "matchedTerm": "Lisinopril",\n        "dictCanon": "lisinopril",\n        "conceptID": "29046",\n        "source": "RxNorm_202303",\n        "uniqueID": "RxNorm_202303:29046"\n      },\n      "strength": {\n        "begin": 11,\n        "end": 15,\n        "type": "de.averbis.types.health.Strength",\n        "coveredText": "5 MG",\n        "id": 2161,\n        "negatedBy": null,\n        "unit": "mg",\n        "matchedTerm": "5 MG",\n        "dictCanon": "5 MG",\n        "conceptID": "STR133",\n        "normalizedUnit": "kg",\n        "source": "RxNormStrength_202301",\n        "normalizedValue": 0.000005,\n        "value": 5,\n        "dimension": "[M]",\n        "uniqueID": "RxNormStrength_202301:STR133"\n      }\n    }\n')),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{width:"20%"},"Name"),(0,i.kt)("th",{width:"70%"},"Description"),(0,i.kt)("th",{width:"10%"},"Type"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"ingredient")),(0,i.kt)("td",null,"Ingredient of the drug."),(0,i.kt)("td",null,"Ingredient")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"strength")),(0,i.kt)("td",null,"Strength of the drug."),(0,i.kt)("td",null,"Strength")))),(0,i.kt)("h3",{id:"ingredient"},"ingredient"),(0,i.kt)("p",null,"Type: ",(0,i.kt)("a",{parentName:"p",href:"/docusaurus/docs/reference/medication/drug/ingredient"},(0,i.kt)("inlineCode",{parentName:"a"},"Ingredient"))),(0,i.kt)("p",null,"Ingredient of the drug."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"strength"},"strength"),(0,i.kt)("p",null,"Type: ",(0,i.kt)("a",{parentName:"p",href:"/docusaurus/docs/reference/medication/drug/strength"},(0,i.kt)("inlineCode",{parentName:"a"},"Strength"))),(0,i.kt)("p",null,"Strength of the drug."))}s.isMDXComponent=!0}}]);