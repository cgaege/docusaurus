"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9926],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(k,o(o({ref:t},l),{},{components:n})):a.createElement(k,o({ref:t},l))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:r,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},o="Start an NLP Pipeline",p={unversionedId:"getting started/start-a-pipeline",id:"getting started/start-a-pipeline",title:"Start an NLP Pipeline",description:"Health Discovery includes various preconfigured NLP pipelines for typical medical use cases.",source:"@site/docs/getting started/start-a-pipeline.md",sourceDirName:"getting started",slug:"/getting started/start-a-pipeline",permalink:"/docusaurus/docs/next/getting started/start-a-pipeline",draft:!1,editUrl:"https://github.com/cgaege/docusaurus/tree/main/docs/getting started/start-a-pipeline.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create a Project",permalink:"/docusaurus/docs/next/getting started/create-a-project"},next:{title:"Analyse Text",permalink:"/docusaurus/docs/next/getting started/analyse-text"}},s={},c=[{value:"Discharge Pipeline",id:"discharge-pipeline",level:2},{value:"Pathology Pipeline",id:"pathology-pipeline",level:2}],l={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"start-an-nlp-pipeline"},"Start an NLP Pipeline"),(0,r.kt)("p",null,"Health Discovery includes various preconfigured NLP pipelines for typical medical use cases."),(0,r.kt)("h2",{id:"discharge-pipeline"},"Discharge Pipeline"),(0,r.kt)("h2",{id:"pathology-pipeline"},"Pathology Pipeline"),(0,r.kt)("p",null,"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'curl -X POST \n"http://localhost:8080/information-discovery/rest/v1/projects?description=Some%20meaningful%20project%20description&name=NewProject" \n-H "accept: application/json;charset=UTF-8" \n-H "api-token: 1746847c8798c4eada1008eab95efc56b9acaef1ee1505ed6a0deb6ec0a90914"\n')),(0,r.kt)("p",null,"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "payload": {\n    "id": 1009,\n    "name": "NewProject",\n    "description": "Some meaningful project description"\n  },\n  "errorMessages": []\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"api")),".")))}m.isMDXComponent=!0}}]);