"use strict";(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[5506],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=s,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||o;return r?n.createElement(h,a(a({ref:t},d),{},{components:r})):n.createElement(h,a({ref:t},d))}));function h(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:s,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1802:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),s=(r(7294),r(3905));const o={sidebar_position:2},a="Cloud Server",i={unversionedId:"dev-guides/cloud-server",id:"dev-guides/cloud-server",title:"Cloud Server",description:"Get SSH public Key",source:"@site/docs/dev-guides/cloud-server.md",sourceDirName:"dev-guides",slug:"/dev-guides/cloud-server",permalink:"/docs/dev-guides/cloud-server",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Developer Guides",permalink:"/docs/category/developer-guides"},next:{title:"Docker",permalink:"/docs/dev-guides/docker"}},l={},u=[{value:"Get SSH public Key",id:"get-ssh-public-key",level:2},{value:"First time login after creating the server",id:"first-time-login-after-creating-the-server",level:2},{value:"Future logins",id:"future-logins",level:2},{value:"Firewall",id:"firewall",level:2},{value:"TimeZone",id:"timezone",level:2},{value:"Base packages",id:"base-packages",level:2},{value:"Docker Installation",id:"docker-installation",level:2},{value:"Docker Compose",id:"docker-compose",level:2},{value:"Run applications with docker",id:"run-applications-with-docker",level:2},{value:"File Copying TO &amp; FROM the server",id:"file-copying-to--from-the-server",level:2},{value:"Squid Proxy",id:"squid-proxy",level:3}],d={toc:u};function c(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"cloud-server"},"Cloud Server"),(0,s.kt)("h2",{id:"get-ssh-public-key"},"Get SSH public Key"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'ssh-keygen -t rsa -C "abc@xyz.com"\n')),(0,s.kt)("h2",{id:"first-time-login-after-creating-the-server"},"First time login after creating the server"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -i ~/.ssh/id_rsa root@ip_address\n\nadduser sammy\nusermod -aG sudo sammy\n\nsudo nano /etc/ssh/sshd_config\nPermitRootLogin no\nPasswordAuthentication no\n\nsu - sammy\nmkdir ~/.ssh\nchmod 700 ~/.ssh\nnano ~/.ssh/authorized_keys\nchmod 600 ~/.ssh/authorized_keys # Copy public key into this file\nsudo systemctl reload sshd.service\n\n## Important check access before exiting from your local terminal\nssh -i ~/.ssh/id_rsa sammy@ip_address\n")),(0,s.kt)("h2",{id:"future-logins"},"Future logins"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"ssh -i ~/.ssh/id_rsa sammy@ip_address\n")),(0,s.kt)("h2",{id:"firewall"},"Firewall"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install ufw\nsudo ufw status\n\nsudo nano /etc/default/ufw\nset > IPV6=yes\n\nsudo ufw disable\nsudo ufw enable\nsudo ufw default deny incoming\nsudo ufw default allow outgoing\nsudo ufw allow ssh\nsudo ufw allow 22/tcp\nsudo ufw allow www\n\n# Specific port\nsudo ufw allow 3306\n")),(0,s.kt)("h2",{id:"timezone"},"TimeZone"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"date\nsudo dpkg-reconfigure tzdata\n")),(0,s.kt)("h2",{id:"base-packages"},"Base packages"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo apt update && sudo apt dist-upgrade && sudo apt autoremove\nsudo apt -y install gcc make linux-headers-$(uname -r) dkms\nsudo apt install -y build-essential autoconf automake python-dev curl\n")),(0,s.kt)("h2",{id:"docker-installation"},"Docker Installation"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/linux/docker-ce/ubuntu/"},"https://docs.docker.com/install/linux/docker-ce/ubuntu/")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo groupadd docker\nsudo usermod -aG docker $USER\nsu ${USER}\nid -nG\n")),(0,s.kt)("h2",{id:"docker-compose"},"Docker Compose"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"https://docs.docker.com/compose/install/")),(0,s.kt)("h2",{id:"run-applications-with-docker"},"Run applications with docker"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"# Simple HTTP Server\ndocker run --name http-server -p 80:80 -d nginx\n\n# MySQL Database\ndocker run --name mysql-db -e MYSQL_ROOT_PASSWORD=my-secret-pw -p 3306:3306 --restart always -d mysql:5.7.29\ndocker run --name phpmyadmin -d --link mysql-db:db -p 4444:80 phpmyadmin/phpmyadmin\n\n# Install Wordpress\ndocker run --name wordpress-site \\\n --link mysql-db \\\n -p 80:80 \\\n -e WORDPRESS_DB_HOST=mysql-db \\\n -e WORDPRESS_DB_USER=root \\\n -e WORDPRESS_DB_PASSWORD=my-secret-pw \\\n -e WORDPRESS_DB_NAME=wordpress \\\n -e WORDPRESS_TABLE_PREFIX=wp_ \\\n -d wordpress\n")),(0,s.kt)("h2",{id:"file-copying-to--from-the-server"},"File Copying TO & FROM the server"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"# Local file TO the server\nscp -i ~/.ssh/test_cloud_rsa $PWD/christiann-koepke-EkL50nhEEoc-unsplash.jpg ubuntu@server-ip:/home/ubuntu/\n\n# Local file FROM the server\nscp -i ~/.ssh/test_cloud_rsa ubuntu@server-ip:/home/ubuntu/christiann-koepke-EkL50nhEEoc-unsplash.jpg $PWD/copy.jpg\n\n# Local folder TO the server\nscp -i ~/.ssh/test_cloud_rsa -r $PWD/image-folder ubuntu@server-ip:/home/ubuntu/image-folder\n\n# Local folder FROM the server\nscp -i ~/.ssh/test_cloud_rsa -r ubuntu@server-ip:/home/ubuntu/image-folder $PWD/image-folder-copy\n")),(0,s.kt)("h3",{id:"squid-proxy"},"Squid Proxy"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo apt install squid apache2-utils\n\n# Edit /etc/squid/squid.conf http_access to allow all\n\n# Password\ntouch /etc/squid/passwd\nhtpasswd /etc/squid/passwd user1\n\n# Edit /etc/squid/squid.conf \nauth_param basic program /usr/lib/squid/basic_ncsa_auth /etc/squid/passwd\nauth_param basic realm proxy\nacl authenticated proxy_auth REQUIRED\nhttp_access allow authenticated\nhttp_port 3128\n\nservice squid restart\n")))}c.isMDXComponent=!0}}]);