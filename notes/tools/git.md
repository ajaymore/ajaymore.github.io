---
---
#Git Commands

###Global config
git config --global user.email ajmore.biz@gmail.com
git config --global user.name "Your Name"

###Commit all files if added already
git commit -a -m 'My commit comments'

###Add file
git add --all

###give a directory name to drop
git rm -r one-of-the-directories

###commit files
git commit -m 'commit message'

###push to git
git push origin master
git push origin gh-pages

###Git local init
- git init
- git remote add origin https://github.com/try-git/try_git.git
- git fetch
- git checkout -t origin/master
- **OR**
- git clone http://repo-address

###Other utilities
- git status
- git log
- git pull origin master
- git diff HEAD
- git diff --staged
- git reset file/file.extn
- git checkout -- octocat.txt
- git branch clean_up
- git branch
- git checkout -b clean_up
- git rm '*.txt'
- git merge clean_up
- git branch -d clean_up (Delete)

###Gitbook
- git init
- git add README.md SUMMARY.md
- git commit -m "first commit"
- git remote add gitbook https://push.gitbook.io/ajaymore/selenium-test-automation.git
- git push -u gitbook master