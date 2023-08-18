"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=d(n),m=l,k=p["".concat(u,".").concat(m)]||p[m]||s[m]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:l,i[1]=a;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=n(7462),l=(n(7294),n(3905));const o={sidebar_position:6},i="Dosage",a={unversionedId:"reference/medication/dosage",id:"reference/medication/dosage",title:"Dosage",description:"de.averbis.types.health.Dosage",source:"@site/docs/reference/medication/dosage.md",sourceDirName:"reference/medication",slug:"/reference/medication/dosage",permalink:"/docusaurus/docs/reference/medication/dosage",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"DoseForm",permalink:"/docusaurus/docs/reference/medication/doseForm"},next:{title:"Date",permalink:"/docusaurus/docs/reference/medication/date"}},u={},d=[{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"dictCanon",id:"dictcanon",level:3},{value:"matchedTerm",id:"matchedterm",level:3},{value:"uniqueID",id:"uniqueid",level:3},{value:"conceptID",id:"conceptid",level:3},{value:"source",id:"source",level:3},{value:"negatedBy",id:"negatedby",level:3}],c={toc:d},p="wrapper";function s(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"dosage"},"Dosage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"de.averbis.types.health.Dosage")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="THE DOSAGE OBJECT"',title:'"THE',DOSAGE:!0,'OBJECT"':!0},' {\n  "begin": 11,\n  "end": 15,\n  "type": "de.averbis.types.health.Dosage",\n  "coveredText": "5 MG",\n  "id": 2165\n}\n')),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{width:"20%"},"Name"),(0,l.kt)("th",{width:"70%"},"Description"),(0,l.kt)("th",{width:"10%"},"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"dictCanon")),(0,l.kt)("td",null,"Preferred term of the dose form"),(0,l.kt)("td",null,"String")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"matchedTerm")),(0,l.kt)("td",null,"Matching synonym of the dose form"),(0,l.kt)("td",null,"String")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"uniqueID")),(0,l.kt)("td",null,"Unique identifier of the dose form of the format ",(0,l.kt)("code",null,"terminologyId:conceptID")),(0,l.kt)("td",null,"String")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"conceptID")),(0,l.kt)("td",null,"The concept Id"),(0,l.kt)("td",null,"String")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"source")),(0,l.kt)("td",null,"The name of the terminology source"),(0,l.kt)("td",null,"String")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"negatedBy")),(0,l.kt)("td",null,"Specifies the negation word, if one exists"),(0,l.kt)("td",null,"String")))),(0,l.kt)("h3",{id:"dictcanon"},"dictCanon"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"String")),(0,l.kt)("p",null,"Preferred term of the dose form."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"matchedterm"},"matchedTerm"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"String")),(0,l.kt)("p",null,"Matching synonym of the dose form."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"uniqueid"},"uniqueID"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"String")),(0,l.kt)("p",null,"Unique identifier of the dose form of the format ",(0,l.kt)("inlineCode",{parentName:"p"},"terminologyId:conceptID"),"."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"conceptid"},"conceptID"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"String")),(0,l.kt)("p",null,"The concept Id"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"source"},"source"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"String")),(0,l.kt)("p",null,"The name of the terminology source."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"negatedby"},"negatedBy"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"String")),(0,l.kt)("p",null,"Specifies the negation word, if one exists."))}s.isMDXComponent=!0}}]);