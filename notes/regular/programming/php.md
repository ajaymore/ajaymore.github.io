---
---
Enable apache rewrite_module

##VirtualHost

1. add entry to hosts file: 127.0.0.1 mysite.local
2. update httpd.conf file
	- uncomment Include conf/extra/httpd-vhosts.conf
3. Go to "C:/wamp/bin/apache/Apache2.2.21/conf/extra" and open the file "httpd.vhosts.conf".
4. update one of the entries as per your need

<pre>
<VirtualHost *:80>
    ServerAdmin webmaster@dummy-host.example.com
    DocumentRoot "C:/wamp/www/playground"
    ServerName mystical.com
    ServerAlias mystical.com
    ErrorLog "logs/dummy-host.example.com-error.log"
    CustomLog "logs/dummy-host.example.com-access.log" common
</VirtualHost>

<VirtualHost *:80>
    ServerAdmin webmaster@dummy-host2.example.com
    DocumentRoot "C:/wamp/www/"
    ServerName localhost
    ErrorLog "logs/dummy-host2.example.com-error.log"
    CustomLog "logs/dummy-host2.example.com-access.log" common
</VirtualHost>
</pre>

##Oauth

###Google
- https://security.google.com/settings/security/permissions?pli=1
- Create project: https://code.google.com/apis/console/ 
- create oauth token
- enter redirect url: http://mywebsite.com/path_to_hybridauth/?hauth.done=Google
- enable google+ and contact api

http://hybridauth.sourceforge.net/userguide/Configuration.html#SETUP_API_KEYS
http://hybridauth.sourceforge.net/userguide/IDProvider_info_Google.html
Use session_destroy to kill session


##Wordpress
1. choose theme
2. create child theme
3. for shortcode no hyphens, no Camel case

##Globals
- $_SERVER
- $_REQUEST
- $_POST
- $_GET
- $_FILES
- $_ENV
- $_COOKIE
- $_SESSION