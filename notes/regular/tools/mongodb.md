---
---
1. Install the database from http://www.mongodb.org/downloads
2. Add to path C:\Program Files\MongoDB 2.6 Standard\bin
2. Download thread safe driver dll 
	- https://github.com/mongodb/mongo-php-driver
	- http://pecl.php.net/package/mongo/1.5.8/windows
3. Add the dll in ext folder inside bin/php/php5.5/ext
4. Edit php.ini with lines below. Open the ini file from WAMPServer tray icon
5. Mongo User should not only be read only permission
<pre>
; MongoDB Extension
extension=php_mongo.dll
</pre>
4. Add below code to composer.json
<pre>
{
	"require": {
		"ext-mongo": "*"
  	}
}
</pre>
5. mongod --dbpath "c://data/db"