"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[949],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,y=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(y,u(u({ref:t},c),{},{components:n})):r.createElement(y,u({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,u[1]=i;for(var s=2;s<o;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4493:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:6},u="Step 6 - Summary and clean up",i={unversionedId:"quickstart/summary-and-clean-up",id:"quickstart/summary-and-clean-up",title:"Step 6 - Summary and clean up",description:"Congratulations! You have successfully finished the quickstart guide.",source:"@site/docs/quickstart/summary-and-clean-up.md",sourceDirName:"quickstart",slug:"/quickstart/summary-and-clean-up",permalink:"/docusaurus/docs/quickstart/summary-and-clean-up",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Step 5 - Analyse health text data",permalink:"/docusaurus/docs/quickstart/analyse-text"},next:{title:"Diagnosis",permalink:"/docusaurus/docs/reference/diagnoses"}},l={},s=[{value:"Summary",id:"summary",level:2},{value:"Clean up (Optional)",id:"clean-up-optional",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"step-6---summary-and-clean-up"},"Step 6 - Summary and clean up"),(0,a.kt)("p",null,"Congratulations! You have successfully finished the quickstart guide.    "),(0,a.kt)("p",null,"Take a few minutes to review a short summary and the key points covered in the tutorial. You might also want to consider cleaning up by dropping any objects you created in the tutorial. And, at the bottom of the page, we provide some links to other topics in the Health Discovery documentation that you can use to learn more."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You have deployed Health Discovery using Docker"),(0,a.kt)("li",{parentName:"ul"},"You have generated a personal API token, created a project and started an NLP pipeline"),(0,a.kt)("li",{parentName:"ul"},"You have analysed health text data and extracted structured medical information")),(0,a.kt)("h2",{id:"clean-up-optional"},"Clean up (Optional)"),(0,a.kt)("p",null,"Execute the following statement to delete all docker containers and volumes that have been created during this quickstart tutorial."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose down -v\n")),(0,a.kt)("h2",{id:"whats-next"},"What's Next?"),(0,a.kt)("p",null,"We recommend continuing learning about Health Discovery using the following resources:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"API reference")),(0,a.kt)("li",{parentName:"ul"},"Preconfigured NLP pipelines")))}d.isMDXComponent=!0}}]);