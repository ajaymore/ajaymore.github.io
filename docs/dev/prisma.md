---
id: prisma
title: Prisma
sidebar_label: Prisma
---

### Create Network
```
docker network create --driver bridge reverse-proxy
```
### Run MySQL Container `Running 5.7 is necessary`
```
docker run -p 3306:3306 --name mysql-container --net reverse-proxy \
--restart always -v /Users/mystical//mysql-data:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=my-secret-pw -e MYSQL_ALLOW_EMPTY_PASSWORD=no -d mysql:5.7
```
### Prisma Server | docker.compose.yml
```yaml
version: '3'
services:
  prisma:
    container_name: prisma-server
    image: prismagraphql/prisma:1.18
    restart: always
    ports:
      - "4466:4466"
    networks:
      - reverse-proxy
    environment:
      PRISMA_CONFIG: |
        port: 4466
        managementApiSecret: my-secret-pw
        databases:
          default:
            connector: mysql
            host: mysql-container
            port: 3306
            user: root
            password: my-secret-pw
            migrations: true
networks:
  reverse-proxy:
    external:
      name: reverse-proxy
```
### App Server
```
graphql create server --boilerplate typescript-advanced

## .env
ADMIN_EMAIL="wpadmin@pl.in"
NODE_ENV="development"
PRISMA_SECRET="oeyai0aepedoZ6mo"
PRISMA_MANAGEMENT_API_SECRET="my-secret-pw"
PRISMA_ENDPOINT="http://localhost:4466/wp/dev"

## prisma.yml

```