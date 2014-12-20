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
6. mongo
7. db
8. use myDb
9. commands
<pre>
db.dropDatabase()
options = { capped : true, autoIndexID : true, size : 6142800, max : 10000 } 
db.createCollection(name, options)
show collections
db.COLLECTION_NAME.drop()
db.COLLECTION_NAME.insert(document)
db.COLLECTION_NAME.find()
db.mycol.find().pretty()
db.COLLECTION_NAME.find().limit(NUMBER)
db.COLLECTION_NAME.find().sort({KEY:1})
db.mycol.find({"by":"tutorials point"}).pretty()	where by = 'tutorials point'
db.mycol.find({"likes":{$lt:50}}).pretty()	where likes < 50
db.mycol.find({"likes":{$lte:50}}).pretty()	where likes <= 50
db.mycol.find({"likes":{$gt:50}}).pretty()	where likes > 50
db.mycol.find({"likes":{$gte:50}}).pretty()	where likes >= 50
db.mycol.find({"likes":{$ne:50}}).pretty()	where likes != 50
USING AND
db.mycol.find({key1:value1, key2:value2}).pretty()
USING OR
db.mycol.find(
   {
      $or: [
	     {key1: value1}, {key2:value2}
      ]
   }
).pretty()
TOGETHER
db.mycol.find("likes": {$gt:10}, $or: [{"by": "tutorials point"}, {"title": "MongoDB Overview"}] }).pretty()
db.COLLECTION_NAME.update(SELECTIOIN_CRITERIA, UPDATED_DATA)
db.COLLECTION_NAME.remove(DELLETION_CRITTERIA)
db.COLLECTION_NAME.remove(DELETION_CRITERIA,1)
PROJECTION
db.mycol.find({},{"title":1,_id:0})
db.mycol.remove({})
</pre>