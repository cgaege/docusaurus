"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8963],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(r),f=a,g=l["".concat(s,".").concat(f)]||l[f]||d[f]||o;return r?n.createElement(g,c(c({ref:t},u),{},{components:r})):n.createElement(g,c({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[l]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9759:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3},c="Create a Project",i={unversionedId:"getting started/create-a-project",id:"getting started/create-a-project",title:"Create a Project",description:"Projects are used to separate data, configurations and users from each other.",source:"@site/docs/getting started/create-a-project.md",sourceDirName:"getting started",slug:"/getting started/create-a-project",permalink:"/docusaurus/docs/next/getting started/create-a-project",draft:!1,editUrl:"https://github.com/cgaege/docusaurus/tree/main/docs/getting started/create-a-project.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create an API Token",permalink:"/docusaurus/docs/next/getting started/create-an-API-token"},next:{title:"Start an NLP Pipeline",permalink:"/docusaurus/docs/next/getting started/start-a-pipeline"}},s={},p=[],u={toc:p},l="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-a-project"},"Create a Project"),(0,a.kt)("p",null,"Projects are used to separate data, configurations and users from each other."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="POST /v1/projects"',title:'"POST','/v1/projects"':!0},'curl -X POST "http://localhost:8080/health-discovery/rest/v1/projects?\\\n  description=YOUR-PROJECT-DESCRIPTION&name=YOUR-PROJECT-NAME" \\\n  -H "accept: application/json;charset=UTF-8" \\\n  -H "api-token: YOUR-API-TOKEN"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="RESPONSE"',title:'"RESPONSE"'},'{\n  "payload": {\n    "id": 1009,\n    "name": "YOUR-PROJECT-NAME",\n    "description": "YOUR-PROJECT-DESCRIPTION"\n  },\n  "errorMessages": []\n}\n')))}d.isMDXComponent=!0}}]);