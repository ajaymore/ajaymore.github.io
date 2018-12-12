---
id: docker
title: Docker commands
sidebar_label: Docker
---

## Dockerfile
[Documentation](https://docs.docker.com/engine/reference/builder/)

`mkdir $(date +%Y-%m-%d_%H%M)`

## commands
```

# Remove untagged images
docker rmi -f $(docker images | grep "<none>" | awk "{print \$3}")
docker build -t mysticalaj/node-web-app -f prod/Dockerfile . # -t for tagname
docker images
docker run -p 8000:8000 -d mysticalaj/node-web-app -e PORT=8000
docker ps
docker logs <container id>
docker exec -it <container id> /bin/bash
docker stop container_id
docker rm container_id
docker image rm image_name
# remove all stopped containers
docker rm $(docker ps --filter status=exited -q)

# remove everything
docker kill $(docker ps -aq)
docker rm $(docker ps -aq)
```

## docker-compose commands
```
sudo chown -R $USER:$USER . # Setting volume permissions
docker-compose build # also to rebuild
docker-compose up # Run all containers
docker-compose run web npm install cors
```

## Copy files from host to running container
```
docker cp foo.txt mycontainer:/foo.txt
docker cp mycontainer:/foo.txt foo.txt

# Multiple files contained by the folder src can be copied into the target folder using:

docker cp src/. mycontainer:/target
docker cp mycontainer:/src/. target
```

## Run command inside running container
`docker exec -it container_id bash`

## SCP
```
scp -i parallel-learning.pem -r ec2-user@12.23.33.33:/home/ec2-user/mongo/ /home/ubuntu/keys/data

scp -i parallel-learning.pem -r /home/ubuntu/keys/data/mongo/12-15-17/parallel-learning-video-services/ ubuntu@12.23.33.33:/home/ubuntu/parallel-learning-video-services/
```

## MongoDB
One Super User controls everything.
At code level each database is owned by their particular user and not by super user

One Super User controls everything.
At code level each database is owned by their particular user and not by super user

```
# Create Container with root user
docker run --name mongo-container -v /home/ajay/mongo-data:/data/db --net=bridge --restart always -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=secret -p 27017:27017 -d mongo

# access the container
docker exec -it mongo-container /bin/bash

# Login with root user
mongo --port 27017 -u "mongoadmin" -p "secret" --authenticationDatabase "admin"

# Provide super user capabilities
use admin
db.updateUser("mongoadmin" , { roles: ["userAdminAnyDatabase", "dbAdminAnyDatabase", "readWriteAnyDatabase"]})

# create database and db user
use cmca-dev
db.createUser({user: "cmcadev", pwd: "budaik3ma0ahb8Ie", roles: ["readWrite"]})

# change password of a user
use cmca-dev
db.changeUserPassword("cmcadev", "newPswd")

# login with db user
mongo --port 27017 -u "ajaymore" -p "" --authenticationDatabase "parallel-learning"
```

```
# backup by admin
docker run --rm --link mongo-container:mongo -v $HOME/mongo-backup:/backup mongo \
 bash -c 'mongodump --out /backup --host mongo:27017'

# restore by admin
docker run --rm --link mongo-container:mongo --net reverse-proxy -v $HOME/mongo-backup/cmcaindia:/backup/cmcaindia mongo \
 bash -c 'mongorestore --db cmca-dev -u mongoadmin -p secret --authenticationDatabase admin /backup/cmcaindia --host mongo:27017'

# backup by user
docker run --rm --link mongo-container:mongo -v $HOME/mongo-backup:/backup mongo \
 bash -c 'mongodump --db cmca-dev -u cmcadev -p newPswd --out /backup --host mongo:27017'

# restore by user
docker run --rm --link mongo-container:mongo -v $HOME/mongo-backup:/backup mongo \
 bash -c 'mongorestore --db cmca-dev -u cmcadev -p newPswd /backup/cmca-dev --host mongo:27017'
 
# Using mongo atlas
mongodump --host cluster0-shard-00-00-ksqln.mongodb.net:27017 --db cmcaindia --ssl --authenticationDatabase admin --username xxxx --password xxxx -o "/home/temp"
```

## MySQL
```
docker exec CONTAINER /usr/bin/mysqldump -u root --password=root DATABASE > backup.sql
cat backup.sql | docker exec -i CONTAINER /usr/bin/mysql -u root --password=root DATABASE
```


docker run -it image_id /bin/bash
apt update
exit
docker commit container_id newimage_name
firebase login --no-localhost


server ---

express, graphql, reactjs, mongodb -- +++

react-native
-- mobile auth -> firebase | any other
-- 
