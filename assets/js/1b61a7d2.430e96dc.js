"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[927],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>h});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function p(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),o=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},c=function(e){var t=o(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=o(i),m=n,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return i?a.createElement(h,s(s({ref:t},c),{},{components:i})):a.createElement(h,s({ref:t},c))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,s=new Array(r);s[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:n,s[1]=p;for(var o=2;o<r;o++)s[o]=i[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},2069:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var a=i(7462),n=(i(7294),i(3905));const r={sidebar_position:4},s="Start a pipeline",p={unversionedId:"quickstart/start-a-pipeline",id:"quickstart/start-a-pipeline",title:"Start a pipeline",description:"Health Discovery includes various preconfigured NLP pipelines. This quickstart guide will use the discharge pipeline that is able to extract medical entities like diagnoses, medications and laboratory values from patient records or discharge letters.",source:"@site/docs/quickstart/start-a-pipeline.md",sourceDirName:"quickstart",slug:"/quickstart/start-a-pipeline",permalink:"/docusaurus/docs/quickstart/start-a-pipeline",draft:!1,editUrl:"https://github.com/cgaege/docusaurus/tree/main/docs/quickstart/start-a-pipeline.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Create a project",permalink:"/docusaurus/docs/quickstart/create-a-project"},next:{title:"Analyse health text data",permalink:"/docusaurus/docs/quickstart/analyse-text"}},l={},o=[{value:"Start the <code>discharge</code> pipeline",id:"start-the-discharge-pipeline",level:2},{value:"Verify that pipeline is started",id:"verify-that-pipeline-is-started",level:2}],c={toc:o},u="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"start-a-pipeline"},"Start a pipeline"),(0,n.kt)("p",null,"Health Discovery includes various preconfigured NLP pipelines. This quickstart guide will use the ",(0,n.kt)("inlineCode",{parentName:"p"},"discharge")," pipeline that is able to extract medical entities like ",(0,n.kt)("inlineCode",{parentName:"p"},"diagnoses"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"medications")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"laboratory values")," from patient records or discharge letters."),(0,n.kt)("h2",{id:"start-the-discharge-pipeline"},"Start the ",(0,n.kt)("inlineCode",{parentName:"h2"},"discharge")," pipeline"),(0,n.kt)("p",null,"Start the ",(0,n.kt)("inlineCode",{parentName:"p"},"discharge")," pipeline in the ",(0,n.kt)("inlineCode",{parentName:"p"},"quickstart")," project. The pipeline will be started in background and it will take some time until it is available."),(0,n.kt)("p",null,"Please replace ",(0,n.kt)("inlineCode",{parentName:"p"},"YOUR-API-TOKEN")," with your API token."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="PUT /v1/textanalysis/projects/{projectName}/pipelines/{pipelineName}/start" showLineNumbers',title:'"PUT','/v1/textanalysis/projects/{projectName}/pipelines/{pipelineName}/start"':!0,showLineNumbers:!0},'curl -X PUT "http://localhost:8080/health-discovery/rest/v1/textanalysis/projects/quickstart/pipelines/discharge/start" \\\n-H "accept: */*" \\\n-H "api-token: YOUR-API-TOKEN"\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=RESPONSE",title:"RESPONSE"},'{\n  "payload": null,\n  "errorMessages": []\n}\n\n')),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Starting a pipeline may take some time. You can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"GET")," method on the pipeline endpoint (as shown below) to verify that the pipeline has been started.")),(0,n.kt)("h2",{id:"verify-that-pipeline-is-started"},"Verify that pipeline is started"),(0,n.kt)("p",null,"The pipeline state indicates whether the pipeline has been started. It can be retrieved with the API call shown below."),(0,n.kt)("p",null,"Please replace ",(0,n.kt)("inlineCode",{parentName:"p"},"YOUR-API-TOKEN")," with your API token."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="GET /v1/textanalysis/project/{projectName}/pipelines/{pipelineName}"',title:'"GET','/v1/textanalysis/project/{projectName}/pipelines/{pipelineName}"':!0},'curl -X GET "http://localhost:8080/health-discovery/rest/v1/textanalysis/projects/quickstart/pipelines/discharge" \\\n-H "accept: */*" \\\n-H "api-token: YOUR-API-TOKEN"\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=RESPONSE",title:"RESPONSE"},'{\n  "payload": {\n    "id": 97025364,\n    "identifier": "K4HbNiCSFRegoHs_gvJU7YvAwMw=",\n    "name": "discharge",\n    "description": "no description",\n    "pipelineState": "STARTED",\n    "pipelineStateMessage": null,\n    "preconfigured": true\n  },\n  "errorMessages": []\n}\n')),(0,n.kt)("p",null," The ",(0,n.kt)("inlineCode",{parentName:"p"},"pipelineState: STARTED")," indicates that the pipeline has been started successfully and is now ready to analyse text."))}d.isMDXComponent=!0}}]);