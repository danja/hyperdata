# Creating a new `hyperdata` project

#:farelo
#:h
#:todo automate

## Set up in repo

- create GitHub repo with README.md etc.

```
cd /home/danny/github-danny/hyperdata/packages
git submodule add https://github.com/danja/store-wrapper.git store-wrapper

cd /home/danny/github-danny/hyperdata/packages
git submodule add https://github.com/danja/sheltopusik.git sheltopusik
```

#:seeAlso [working-with-submodules](https://github.blog/open-source/git/working-with-submodules/)

```sh
npm init -y
```

Edit later.

## Init Docs

```
cd ~/github-danny/hyperdata/packages/open-world-interface
mkdir docs
cp -r ~/github-danny/postcraft/postcraft-template ./docs/postcraft


cd ~/github-danny/hyperdata/packages/store-wrapper
mkdir docs
cp -r ~/github-danny/postcraft/postcraft-template ./docs/postcraft

```

#:todo revisit locations, local, server, backup

## Create Workspaces

_for now_

- add to VSCode `~/workspaces/projects.code-workspace` (for now, primarily for git bits)

- add to #:h:desktop via link to #:postcraft dir

```
cd ~/workspaces_hyperdata-desktop/postcrafts-raw
ln -s /home/danny/github-danny/hyperdata/packages/open-world-interface/docs/postcraft/content-raw ./open-world-interface

cd ~/workspaces_hyperdata-desktop/postcrafts-raw
ln -s /home/danny/github-danny/hyperdata/packages/store-wrapper/docs/postcraft/content-raw ./store-wrapper

```
