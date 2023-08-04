"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8946],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6317:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_position:1},o="Installation",i={unversionedId:"quickstart/installation",id:"quickstart/installation",title:"Installation",description:"Installing Health Discovery using Docker is the easiest and fastest way to get started.",source:"@site/docs/quickstart/installation.md",sourceDirName:"quickstart",slug:"/quickstart/installation",permalink:"/docusaurus/docs/next/quickstart/installation",draft:!1,editUrl:"https://github.com/cgaege/docusaurus/tree/main/docs/quickstart/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Quickstart",permalink:"/docusaurus/docs/next/category/quickstart"},next:{title:"Create an API token",permalink:"/docusaurus/docs/next/quickstart/create-an-API-token"}},l={},c=[{value:"System Requirements",id:"system-requirements",level:2},{value:"Installation Steps",id:"installation-steps",level:2},{value:"Login to registry.averbis.com",id:"login-to-registryaverbiscom",level:3},{value:"Download the <code>docker-compose.yml</code> file",id:"download-the-docker-composeyml-file",level:3},{value:"Start Health Discovery",id:"start-health-discovery",level:3},{value:"Post-Installation Steps",id:"post-installation-steps",level:2},{value:"Set administrator password",id:"set-administrator-password",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Installing Health Discovery using Docker is the easiest and fastest way to get started."),(0,r.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A current version of Docker running on AMD64 architecture"),(0,r.kt)("li",{parentName:"ul"},"At least 24GB of RAM"),(0,r.kt)("li",{parentName:"ul"},"At least 20GB of disk space")),(0,r.kt)("h2",{id:"installation-steps"},"Installation Steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Login to the Averbis docker registry"),(0,r.kt)("li",{parentName:"ul"},"Download the ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," file"),(0,r.kt)("li",{parentName:"ul"},"Start Health Discovery")),(0,r.kt)("h3",{id:"login-to-registryaverbiscom"},"Login to registry.averbis.com"),(0,r.kt)("p",null,"Login to the Averbis docker registry using your Averbis credentials to pull Docker images."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker login registry.averbis.com\n")),(0,r.kt)("p",null,"After successful login you should see something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=Output",title:"Output"},"Username: me@example.com\nPassword: ***********\n\nLogin Succeeded\n")),(0,r.kt)("h3",{id:"download-the-docker-composeyml-file"},"Download the ",(0,r.kt)("inlineCode",{parentName:"h3"},"docker-compose.yml")," file"),(0,r.kt)("p",null,"Fetch the latest ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file and save it on your disk."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -LO https://raw.githubusercontent.com/cgaege/docusaurus/main/docs/assets/docker-compose.yml\n")),(0,r.kt)("h3",{id:"start-health-discovery"},"Start Health Discovery"),(0,r.kt)("p",null,"Start the Health Discovery docker containers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up -d\n")),(0,r.kt)("p",null,"Pulling the docker images and starting the containers may take some time. You can monitor the progress using ",(0,r.kt)("inlineCode",{parentName:"p"},"docker ps"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=Output",title:"Output"},'CONTAINER ID   IMAGE                                                           COMMAND                  CREATED          STATUS                             PORTS                                                             NAMES\nc9d1faac859b   registry.averbis.com/health-discovery/health-discovery:6.19.0   "./health-discovery.\u2026"   45 seconds ago   Up 44 seconds (health: starting)   1099/tcp, 8101/tcp, 8181/tcp, 44444/tcp, 0.0.0.0:8080->8080/tcp   downloads-health-discovery-hd-1\n6e91555e6d16   registry.averbis.com/gcm/gcm:7.6.0                              "karaf run"              7 days ago       Up 45 seconds (health: starting)   1099/tcp, 8101/tcp, 8181/tcp, 44444/tcp                           downloads-gcm-1\nb6011906ba85   mariadb:10.5                                                    "docker-entrypoint.s\u2026"   7 days ago       Up 44 seconds                      3306/tcp                                                          downloads-database-1\n54b2f3eaf00d   registry.averbis.com/solr/solr:7.6.0                            "./platform-solr.sh"     7 days ago       Up 45 seconds (healthy)            8983/tcp                                                          downloads-solr-1\n\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Wait until all containers have been started and ready ",(0,r.kt)("inlineCode",{parentName:"p"},"healthy")," state before proceeding.")),(0,r.kt)("h2",{id:"post-installation-steps"},"Post-Installation Steps"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The initial password of the ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," user is ",(0,r.kt)("inlineCode",{parentName:"p"},"admin"),". Is is highly recommended to set an own secure password.")),(0,r.kt)("h3",{id:"set-administrator-password"},"Set administrator password"),(0,r.kt)("p",null,"Set a secure password for the ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," user by replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"YOUR-PASSWORD")," with your password."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="PUT /v1/users/{userName}/changeMyPassword" showLineNumbers',title:'"PUT','/v1/users/{userName}/changeMyPassword"':!0,showLineNumbers:!0},'curl -X PUT "http://localhost:8080/health-discovery/rest/v1/users/admin/changeMyPassword" \\\n-H "accept: */*" \\\n-H "Content-Type: application/json" \\ \n-d "{ \\"oldPassword\\": \\"admin\\", \\"newPassword\\": \\"YOUR-PASSWORD\\"}"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=RESPONSE",title:"RESPONSE"},'{\n  "payload": null,\n  "errorMessages": []\n}\n')),(0,r.kt)("p",null,"Congratulations, you have successfully installed and started Health Discovery."))}u.isMDXComponent=!0}}]);