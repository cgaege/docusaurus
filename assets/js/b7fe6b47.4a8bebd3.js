"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[812],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2359:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},i="Create an API token",s={unversionedId:"quickstart/create-an-API-token",id:"quickstart/create-an-API-token",title:"Create an API token",description:"In order to use the Health Discovery REST API you need to generate an API token.",source:"@site/docs/quickstart/create-an-API-token.md",sourceDirName:"quickstart",slug:"/quickstart/create-an-API-token",permalink:"/docusaurus/docs/next/quickstart/create-an-API-token",draft:!1,editUrl:"https://github.com/cgaege/docusaurus/tree/main/docs/quickstart/create-an-API-token.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docusaurus/docs/next/quickstart/installation"},next:{title:"Create a project",permalink:"/docusaurus/docs/next/quickstart/create-a-project"}},c={},u=[],l={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-an-api-token"},"Create an API token"),(0,a.kt)("p",null,"In order to use the Health Discovery REST API you need to generate an API token. "),(0,a.kt)("p",null,"Please replace ",(0,a.kt)("inlineCode",{parentName:"p"},"YOUR-PASSWORD")," with your ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," user password."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="POST /v1/users/{username}/apitoken" showLineNumbers',title:'"POST','/v1/users/{username}/apitoken"':!0,showLineNumbers:!0},'curl -X POST "http://localhost:8080/health-discovery/rest/v1/users/admin/apitoken" \\\n    -H "accept: */*" -H "Content-Type: application/json" \\\n    -d "{ \\"password\\": \\"YOUR-PASSWORD\\", \\"userSourceName\\": \\"\\"}"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=RESPONSE",title:"RESPONSE"},'{\n  "payload": "1063ff3701e68e337f2630a0ed68e582646be3d0bdff6169d8ee277d2423dfac",\n  "errorMessages": []\n}\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Please make sure to copy your API token now and store it safely. You will not be able to see it again.")))}d.isMDXComponent=!0}}]);