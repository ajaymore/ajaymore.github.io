---
---
- Download Heroku toolbelt
- heroku login
- create or clone git repo [git clone https://github.com/heroku/php-getting-started.git]
- composer init
- heroku create app_name
- heroku apps:rename ajaymore
- composer install
- Make sure app in working in local
- add procfile to make web directory as web root
- git add --all
- git commit -m message
- git push heroku master
- make sure one instance of app is running  
heroku ps:scale web=1
- heroku open
- check how many dynos are running: heroku ps
- config
<pre>
heroku config:set GITHUB_USERNAME=joesmith
heroku config
heroku config:get GITHUB_USERNAME
heroku config:unset GITHUB_USERNAME

composer update --ignore-platform-reqs
</pre>

- oauth create app with https://developers.facebook.com/apps
- https://code.google.com/apis/console/
- enable google plus api
- do not use @ in mongodb passwords

angular.module('myApp', []).config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

- heroku addons:add heroku-postgresql:dev
- heroku config | grep HEROKU_POSTGRESQL

php artisan migrate:make create_punk_table
php artisan migrate

windows sublime text menu : https://gist.github.com/jcppkkk/8330314/download#