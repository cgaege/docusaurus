"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5602],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||l;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:i,o[1]=a;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const l={sidebar_position:8},o="TTY",a={unversionedId:"reference/medication/tty",id:"reference/medication/tty",title:"TTY",description:"de.averbis.types.health.TTY",source:"@site/docs/reference/medication/tty.md",sourceDirName:"reference/medication",slug:"/reference/medication/tty",permalink:"/docusaurus/docs/reference/medication/tty",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"DateInterval",permalink:"/docusaurus/docs/reference/medication/dateInterval"}},c={},p=[{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"code",id:"code",level:3},{value:"kind",id:"kind",level:3},{value:"description",id:"description",level:3}],d={toc:p},u="wrapper";function s(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tty"},"TTY"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"de.averbis.types.health.TTY")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="THE TTY OBJECT"',title:'"THE',TTY:!0,'OBJECT"':!0},'{\n  "begin": 0,\n  "end": 28,\n  "type": "de.averbis.types.health.TTY",\n  "coveredText": "Ibuprofen 400 MG Oral Tablet",\n  "id": 1617,\n  "code": "217693",\n  "kind": "BN",\n  "description": "Ibu"\n}\n')),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{width:"20%"},"Name"),(0,i.kt)("th",{width:"70%"},"Description"),(0,i.kt)("th",{width:"10%"},"Type"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"code")),(0,i.kt)("td",null,"Term type code for the medication"),(0,i.kt)("td",null,"String")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"kind")),(0,i.kt)("td",null,"The kind of the term type"),(0,i.kt)("td",null,"String")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"description")),(0,i.kt)("td",null,"Term type description for the medication"),(0,i.kt)("td",null,"String")))),(0,i.kt)("h3",{id:"code"},"code"),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"String")),(0,i.kt)("p",null,"Term type code for the medication"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"kind"},"kind"),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"String")),(0,i.kt)("p",null,"The kind of the term type, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"IN")," for ingredient, ",(0,i.kt)("inlineCode",{parentName:"p"},"SCD")," for semantic clinical drug"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"String")),(0,i.kt)("p",null,"Term type description for the medication"))}s.isMDXComponent=!0}}]);