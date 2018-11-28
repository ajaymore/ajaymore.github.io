---
id: shell
title: Shell commands
sidebar_label: Shell
---

## Kernel
```
# Get kernel version
uname -r
# Get OS info
lsb_release -a
```

## Permissions
```
0 - no permissions
1 - x
2 - r
3 - r+x
4 - w
5 - w+x
6 - r+w
7 - r+w+x

ls -lh
sudo chmod 754 -R folder-name
sudo chmod 755 file-name
ls -lh

# change only owner
sudo chown username -R foldername

# change owner and group
sudo chown username:groupname -R foldername

# Change the group of /u and subfiles to "staff"
chgrp -hR staff /u

# add user to group wheel
usermod -aG wheel username
su - $USER

# list users in group
sudo grep 'grpup-name-here' /etc/group

# list user groups
groups
```
## Directory navigation

## Services

## Applications

## System Recovery

## File system

## Package manager

## Hardware detection

## Bootloader

## Networking

## Utilites
strings yourPDFfilepath.pdf | grep FontName
