---
---
200	OK	It worked!
201	Created	The resource was created OK!
304	Not Modified	The client can use the cached version of this resource, because nothing has changed.
400	Bad Request	The client did something wrong. The request has bad syntax or cannot be fulfilled.
401	Not Authorized	The Web API is requesting the client to authenticate.
403	Forbidden	The server understood the request, but is refusing to fulfill it due to restrictions in the client’s authorization. Do not try again.
404	Not Found	The resource was not found. There is nothing on that endpoint URI.
500	Internal Server Error	The author of the service did something wrong. Something went bad on the server. (IOW: the Web API is fucked up)

netbeans : 
format code : alt + shift + f
delete line : 
search file : ctrl + o
go to line : ctrl + g
duplicate line/lines : ctrl + shift + arrow
comment/uncomment : ctrl + /

composer create-project laravel/laravel laravelTest --prefer-dist


document.getElementById()
document.getElementsByTagName()
document.getElementsByClassName()
document.querySelector()

element.innerHTML=
element.attribute=
element.setAttribute(attribute,value)
attr()
element.style.property=
css()

document.createElement()
document.removeChild()
document.appendChild()
document.replaceChild()

document.getElementById("myImage").src


var div = document.createElement('div');
div.textContent = "Sup, y'all?";
div.setAttribute('class', 'note');
document.body.appendChild(div);

var span = document.createElement('span');
if (span.textContent) {
    span.textContent = "Hello!";
} else if (span.innerText) {
    span.innerText = "Hello!";
}

DB Upgraded

e8d57e
creating flat design websites
sass and compass for designers
Learning android canvas
Creating dynamic UI with android fragments
Augmented reality for android application development
Android 3.0 Animations: Beginner's Guide
Android application security essentials

create github repo
create netbeans 
start coding.

gem install compass
gem update compass


gem install compass-normalize

If using an existing project, edit your config.rb and add this line:
require 'compass-normalize'

@import "normalize";
You can also just import parts you need:
@import 'normalize/html5';
@import 'normalize/base';
@import 'normalize/links';
@import 'normalize/typography';
@import 'normalize/embeds';
@import 'normalize/groups';
@import 'normalize/forms';
@import 'normalize/tables';