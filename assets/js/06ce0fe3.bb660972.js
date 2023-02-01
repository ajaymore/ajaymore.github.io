"use strict";(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[6061],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>v});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),d=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=d(r),m=o,v=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return r?t.createElement(v,l(l({ref:n},u),{},{components:r})):t.createElement(v,l({ref:n},u))}));function v(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[c]="string"==typeof e?e:o,l[1]=a;for(var d=2;d<i;d++)l[d]=r[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2785:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=r(7462),o=(r(7294),r(3905));const i={sidebar_position:2},l="Shell",a={unversionedId:"dev-guides/shell",id:"dev-guides/shell",title:"Shell",description:"Cleaning up node_modules",source:"@site/docs/dev-guides/shell.md",sourceDirName:"dev-guides",slug:"/dev-guides/shell",permalink:"/docs/dev-guides/shell",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Git",permalink:"/docs/dev-guides/git"},next:{title:"Wordpress",permalink:"/docs/dev-guides/wordpress"}},s={},d=[{value:"Cleaning up node_modules",id:"cleaning-up-node_modules",level:2},{value:"Kernel",id:"kernel",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Directory navigation",id:"directory-navigation",level:2},{value:"Services",id:"services",level:2},{value:"Applications",id:"applications",level:2},{value:"System Recovery",id:"system-recovery",level:2},{value:"File system",id:"file-system",level:2},{value:"Package manager",id:"package-manager",level:2},{value:"Hardware detection",id:"hardware-detection",level:2},{value:"Bootloader",id:"bootloader",level:2},{value:"Networking",id:"networking",level:2},{value:"Utilites",id:"utilites",level:2}],u={toc:d};function c(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"shell"},"Shell"),(0,o.kt)("h2",{id:"cleaning-up-node_modules"},"Cleaning up node_modules"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# List size of a sub-folders\ndu -sh */\n\n# List contents of current folder\ndu -sh $PWD/*\n\n\n# Cleaning up node_modules or any other big size folders\nfind . -name 'node_modules' -type d -prune -exec rm -rf '{}' +\n")),(0,o.kt)("h2",{id:"kernel"},"Kernel"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Get kernel version\nuname -r\n# Get OS info\nlsb_release -a\n")),(0,o.kt)("h2",{id:"permissions"},"Permissions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"0 - no permissions\n1 - x\n2 - r\n3 - r+x\n4 - w\n5 - w+x\n6 - r+w\n7 - r+w+x\n\nls -lh\nsudo chmod 754 -R folder-name\nsudo chmod 755 file-name\nls -lh\n\n# change only owner\nsudo chown username -R foldername\n\n# change owner and group\nsudo chown username:groupname -R foldername\n\n# Change the group of /u and subfiles to \"staff\"\nchgrp -hR staff /u\n\n# add user to group wheel\nusermod -aG wheel username\nsu - $USER\n\n# list users in group\nsudo grep 'grpup-name-here' /etc/group\n\n# list user groups\ngroups\n")),(0,o.kt)("h2",{id:"directory-navigation"},"Directory navigation"),(0,o.kt)("h2",{id:"services"},"Services"),(0,o.kt)("h2",{id:"applications"},"Applications"),(0,o.kt)("h2",{id:"system-recovery"},"System Recovery"),(0,o.kt)("h2",{id:"file-system"},"File system"),(0,o.kt)("h2",{id:"package-manager"},"Package manager"),(0,o.kt)("h2",{id:"hardware-detection"},"Hardware detection"),(0,o.kt)("h2",{id:"bootloader"},"Bootloader"),(0,o.kt)("h2",{id:"networking"},"Networking"),(0,o.kt)("h2",{id:"utilites"},"Utilites"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"strings yourPDFfilepath.pdf | grep FontName\n")))}c.isMDXComponent=!0}}]);