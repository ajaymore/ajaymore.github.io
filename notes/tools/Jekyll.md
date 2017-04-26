---
---
Jekyll

Install Python
Add python installation folder to path
Install Ruby using installer
Download Devkit and extract > set path to bin folder
ruby dk.rb init
ruby dk.rb install

gem install bundler
gem install jekyll
gem install jemoji

run bundle update to keep the blog udated

edit _config.yml
# Build settings
highlighter: true
markdown: kramdown
permalink: pretty

jekyll serve --watch

Using RobotoDraft
Adding javascript
list all posts
tags, categories
Jemoji
jekyll sitemap

Markdown
![My helpful screenshot]({{ site.baseurl }}/assets/DSC09584_1.jpg)

background : google plus
Top bar, Links bar like google or more colorful

Card View for images
More colors
Image background as in foundation UI

##front-matter For page sitemap

```
sitemap:
    priority: 0.7
    changefreq: monthly
    lastmod: 2013-03-29T12:49:30-05:00
```