(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),o=(n(0),n(179)),c={id:"git",title:"Git",sidebar_label:"Git"},i={id:"git",isDocsHomePage:!1,title:"Git",description:"HEAD is a reference to the last commit in the currently checked-out branch.",source:"@site/docs/git.md",permalink:"/docs/git",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/git.md",sidebar_label:"Git"},l=[],b={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"HEAD is a reference to the last commit in the currently checked-out branch.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"The command git remote add origin ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"mailto:git@github.com"}),"git@github.com"),":peter/first_app.git creates a new remote called origin located at ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"mailto:git@github.com"}),"git@github.com"),":peter/first_app.git. Once you do this, in your push commands, you can push to origin instead of typing out the whole URL.")),Object(o.b)("p",null,"Sets the name, email you want attached to your commit transactions"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'git config --global user.name "[name]"\ngit config --global user.email "[email address]"\n')),Object(o.b)("p",null,"Create repositories"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# Clone existing repository\ngit clone https://xxx\n\n# Create local repository\ngit init\n\n# Add remote origin to local repository\ngit remote add origin https://xxx\n\n# List all currently configured remotes\ngit remote -v\n\n# Download changes and merge into HEAD\ngit pull <remote> <branch>\n\n# Remote git\nrm -rf .git\n")),Object(o.b)("p",null,"Create and manage branches"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# List all existing branches\ngit branch -av\n\n# Switch HEAD branch\ngit checkout <branch>\n\n# Creates MyFeature branch off dev.\ngit checkout -b myFeature dev\n\n# Now merge your changes to dev without a fast-forward\ngit checkout dev\ngit merge --no-ff myFeature\n\n# Create a new branch based on your current HEAD\ngit branch <new-branch>\n\n# Delete a local branch\ngit branch -d <branch>\n\n# Delete remote branch\ngit branch -d <remote/branch>\n")),Object(o.b)("p",null,"Managing and pushing code"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'# Changed files in working directory\ngit status\n\n# Changes to tracked files\ngit diff\n\n# Add all changed files\ngit add --all\n\n# Add some changes in <file> to the commit\ngit add -p <file>\n\n# Commit all the files added\ngit commit -m "Commit message"\n\n# Set default push branch\ngit push --set-upstream origin docs\n\n# Push the changes\ngit push <remote> <branch>\n')),Object(o.b)("p",null,"Get info"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"git log\ngit log -p <file>\ngit blame <file>\n")),Object(o.b)("p",null,"Undo"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"git reset --hard HEAD\ngit checkout -- yarn.lock\n")))}u.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=u(n),g=r,m=s["".concat(c,".").concat(g)]||s[g]||p[g]||o;return n?a.a.createElement(m,i(i({ref:t},b),{},{components:n})):a.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);