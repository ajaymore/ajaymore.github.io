(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(9),o=(n(0),n(179)),s={id:"cloud-server",title:"Cloud Server Setup",sidebar_label:"Cloud Server"},c={id:"cloud-server",isDocsHomePage:!1,title:"Cloud Server Setup",description:"Get SSH public Key",source:"@site/docs/cloud-server.md",permalink:"/docs/cloud-server",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/cloud-server.md",sidebar_label:"Cloud Server",sidebar:"someSidebar",next:{title:"Docker",permalink:"/docs/docker"}},i=[{value:"Get SSH public Key",id:"get-ssh-public-key",children:[]},{value:"First time login after creating the server",id:"first-time-login-after-creating-the-server",children:[]},{value:"Future logins",id:"future-logins",children:[]},{value:"Firewall",id:"firewall",children:[]},{value:"TimeZone",id:"timezone",children:[]},{value:"Base packages",id:"base-packages",children:[]},{value:"Docker Installation",id:"docker-installation",children:[]},{value:"Docker Compose",id:"docker-compose",children:[]},{value:"Run applications with docker",id:"run-applications-with-docker",children:[]},{value:"File Copying TO &amp; FROM the server",id:"file-copying-to--from-the-server",children:[{value:"Squid Proxy",id:"squid-proxy",children:[]}]}],u={rightToc:i};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"get-ssh-public-key"},"Get SSH public Key"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'ssh-keygen -t rsa -C "abc@xyz.com"\n')),Object(o.b)("h2",{id:"first-time-login-after-creating-the-server"},"First time login after creating the server"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"ssh -i ~/.ssh/id_rsa root@ip_address\n\nadduser sammy\nusermod -aG sudo sammy\n\nsudo nano /etc/ssh/sshd_config\nPermitRootLogin no\nPasswordAuthentication no\n\nsu - sammy\nmkdir ~/.ssh\nchmod 700 ~/.ssh\nnano ~/.ssh/authorized_keys\nchmod 600 ~/.ssh/authorized_keys # Copy public key into this file\nsudo systemctl reload sshd.service\n\n## Important check access before exiting from your local terminal\nssh -i ~/.ssh/id_rsa sammy@ip_address\n")),Object(o.b)("h2",{id:"future-logins"},"Future logins"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"ssh -i ~/.ssh/id_rsa sammy@ip_address\n")),Object(o.b)("h2",{id:"firewall"},"Firewall"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"sudo apt-get install ufw\nsudo ufw status\n\nsudo nano /etc/default/ufw\nset > IPV6=yes\n\nsudo ufw disable\nsudo ufw enable\nsudo ufw default deny incoming\nsudo ufw default allow outgoing\nsudo ufw allow ssh\nsudo ufw allow 22/tcp\nsudo ufw allow www\n\n# Specific port\nsudo ufw allow 3306\n")),Object(o.b)("h2",{id:"timezone"},"TimeZone"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"date\nsudo dpkg-reconfigure tzdata\n")),Object(o.b)("h2",{id:"base-packages"},"Base packages"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo apt update && sudo apt dist-upgrade && sudo apt autoremove\nsudo apt -y install gcc make linux-headers-$(uname -r) dkms\nsudo apt install -y build-essential autoconf automake python-dev curl\n")),Object(o.b)("h2",{id:"docker-installation"},"Docker Installation"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/install/linux/docker-ce/ubuntu/"}),"https://docs.docker.com/install/linux/docker-ce/ubuntu/")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo groupadd docker\nsudo usermod -aG docker $USER\nsu ${USER}\nid -nG\n")),Object(o.b)("h2",{id:"docker-compose"},"Docker Compose"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/compose/install/"}),"https://docs.docker.com/compose/install/")),Object(o.b)("h2",{id:"run-applications-with-docker"},"Run applications with docker"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"# Simple HTTP Server\ndocker run --name http-server -p 80:80 -d nginx\n\n# MySQL Database\ndocker run --name mysql-db -e MYSQL_ROOT_PASSWORD=my-secret-pw -p 3306:3306 --restart always -d mysql:5.7.29\ndocker run --name phpmyadmin -d --link mysql-db:db -p 4444:80 phpmyadmin/phpmyadmin\n\n# Install Wordpress\ndocker run --name wordpress-site \\\n --link mysql-db \\\n -p 80:80 \\\n -e WORDPRESS_DB_HOST=mysql-db \\\n -e WORDPRESS_DB_USER=root \\\n -e WORDPRESS_DB_PASSWORD=my-secret-pw \\\n -e WORDPRESS_DB_NAME=wordpress \\\n -e WORDPRESS_TABLE_PREFIX=wp_ \\\n -d wordpress\n")),Object(o.b)("h2",{id:"file-copying-to--from-the-server"},"File Copying TO & FROM the server"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"# Local file TO the server\nscp -i ~/.ssh/test_cloud_rsa $PWD/christiann-koepke-EkL50nhEEoc-unsplash.jpg ubuntu@server-ip:/home/ubuntu/\n\n# Local file FROM the server\nscp -i ~/.ssh/test_cloud_rsa ubuntu@server-ip:/home/ubuntu/christiann-koepke-EkL50nhEEoc-unsplash.jpg $PWD/copy.jpg\n\n# Local folder TO the server\nscp -i ~/.ssh/test_cloud_rsa -r $PWD/image-folder ubuntu@server-ip:/home/ubuntu/image-folder\n\n# Local folder FROM the server\nscp -i ~/.ssh/test_cloud_rsa -r ubuntu@server-ip:/home/ubuntu/image-folder $PWD/image-folder-copy\n")),Object(o.b)("h3",{id:"squid-proxy"},"Squid Proxy"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo apt install squid apache2-utils\n\n# Edit /etc/squid/squid.conf http_access to allow all\n\n# Password\ntouch /etc/squid/passwd\nhtpasswd /etc/squid/passwd user1\n\n# Edit /etc/squid/squid.conf \nauth_param basic program /usr/lib/squid/basic_ncsa_auth /etc/squid/passwd\nauth_param basic realm proxy\nacl authenticated proxy_auth REQUIRED\nhttp_access allow authenticated\nhttp_port 3128\n\nservice squid restart\n")))}l.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),b=r,m=d["".concat(s,".").concat(b)]||d[b]||p[b]||o;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var u=2;u<o;u++)s[u]=n[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);