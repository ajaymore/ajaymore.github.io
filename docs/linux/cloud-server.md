---
id: cloud-server
title: Cloud server setup
sidebar_label: Cloud server setup
---

## Digital ocean
https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04
https://www.digitalocean.com/community/tutorials/7-security-measures-to-protect-your-servers
https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys--2
https://www.digitalocean.com/community/tutorials/how-to-setup-a-firewall-with-ufw-on-an-ubuntu-and-debian-cloud-server

### SSH Keys
```
ssh-keygen -t rsa -C "mail@ajaymore.in"
create droplet with above key
ssh -i ~/.ssh/id_rsa root@ip_address
adduser sammy
usermod -aG sudo sammy

sudo nano /etc/ssh/sshd_config
	PermitRootLogin no
	PasswordAuthentication no
su - sammy
mkdir ~/.ssh
chmod 700 ~/.ssh
nano ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
sudo systemctl reload sshd.service
# Make sure to test the user access without exiting

# To remove previous known_hosts
ssh-keygen -R ip:hostname
```

### Firewalls
```
sudo apt-get install ufw
sudo ufw status
sudo nano /etc/default/ufw
IPV6=yes
sudo ufw disable
sudo ufw enable
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow 22/tcp
sudo ufw allow www
sudo ufw allow 443/tcp

ufw status numbered
ufw delete number
```

### Set Timezone
```
date
sudo dpkg-reconfigure tzdata
```

### Base packages
- `sudo apt update && sudo apt dist-upgrade && sudo apt autoremove`
- `sudo apt -y install gcc make linux-headers-$(uname -r) dkms`
- `sudo apt install -y build-essential autoconf automake python-dev curl`

### Docker
https://docs.docker.com/install/linux/docker-ce/ubuntu/
```
sudo curl -L https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
sudo usermod -aG docker ${USER}
su ${USER}
id -nG
```

### Reverse-Proxy
```
docker network create --driver bridge reverse-proxy
cd ~ && mkdir certs
docker run -d -p 80:80 -p 443:443 \
    --name nginx-proxy \
    --net reverse-proxy \
    --restart always \
    -v $HOME/certs:/etc/nginx/certs:ro \
    -v /etc/nginx/vhost.d \
    -v /usr/share/nginx/html \
    -v /var/run/docker.sock:/tmp/docker.sock:ro \
    -e ENABLE_IPV6=true \
    --label com.github.jrcs.letsencrypt_nginx_proxy_companion.nginx_proxy=true \
    jwilder/nginx-proxy
docker run -d \
    --name nginx-letsencrypt \
    --net reverse-proxy \
    --restart always \
    --volumes-from nginx-proxy \
    -v $HOME/certs:/etc/nginx/certs:rw \
    -v /var/run/docker.sock:/var/run/docker.sock:ro \
    jrcs/letsencrypt-nginx-proxy-companion
docker run -d \
    --name site-a \
    --net reverse-proxy \
    -e 'LETSENCRYPT_EMAIL=mail@abc.com' \
    -e 'LETSENCRYPT_HOST=a.example.com' \
    -e 'VIRTUAL_HOST=a.example.com' nginx
```

### Basic commands
```
scp -i ~/.ssh/id_rsa -r user@your.server.example.com:/path/to/foo /home/user/Desktop/

```

```
docker run --name mongo-container -v $HOME/mongo-data:/data/db --net=reverse-proxy --restart always -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=secret -p 27017:27017 -d mongo

docker exec -it mongo-container /bin/bash
mongo --port 27017 -u "mongoadmin" -p "secret" --authenticationDatabase "admin"
use admin
db.updateUser("mongoadmin" , { roles: ["userAdminAnyDatabase", "dbAdminAnyDatabase", "readWriteAnyDatabase"]})

sudo ufw allow 27017/tcp

curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm i -g prisma
```
