"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1783],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(r),f=a,m=l["".concat(c,".").concat(f)]||l[f]||d[f]||o;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9751:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:5},s="Analyse Text",i={unversionedId:"getting started/analyse-text",id:"getting started/analyse-text",title:"Analyse Text",description:"The product uses projects to separate different data, configurations and users from each other.",source:"@site/docs/getting started/analyse-text.md",sourceDirName:"getting started",slug:"/getting started/analyse-text",permalink:"/docusaurus/docs/next/getting started/analyse-text",draft:!1,editUrl:"https://github.com/cgaege/docusaurus/tree/main/docs/getting started/analyse-text.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Start an NLP Pipeline",permalink:"/docusaurus/docs/next/getting started/start-a-pipeline"},next:{title:"Guides",permalink:"/docusaurus/docs/next/category/guides"}},c={},u=[{value:"Create your first Project",id:"create-your-first-project",level:2}],p={toc:u},l="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"analyse-text"},"Analyse Text"),(0,a.kt)("p",null,"The product uses ",(0,a.kt)("inlineCode",{parentName:"p"},"projects")," to separate different data, configurations and users from each other. "),(0,a.kt)("h2",{id:"create-your-first-project"},"Create your first Project"),(0,a.kt)("p",null,"Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'curl -X POST \n"http://localhost:8080/information-discovery/rest/v1/projects?description=Some%20meaningful%20project%20description&name=NewProject" \n-H "accept: application/json;charset=UTF-8" \n-H "api-token: 1746847c8798c4eada1008eab95efc56b9acaef1ee1505ed6a0deb6ec0a90914"\n')),(0,a.kt)("p",null,"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "payload": {\n    "id": 1009,\n    "name": "NewProject",\n    "description": "Some meaningful project description"\n  },\n  "errorMessages": []\n}\n')))}d.isMDXComponent=!0}}]);