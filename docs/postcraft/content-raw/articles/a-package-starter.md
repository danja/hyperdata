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
git submodule add https://github.com/danja/tbox.git tbox
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

```
mkdir ~/github-danny/hyperdata/packages/tbox/docs

cp -r ~/github-danny/postcraft/postcraft-template ~/github-danny/hyperdata/packages/tbox/docs/postcraft

ln -s ~/github-danny/hyperdata/packages/tbox/docs/postcraft/content-raw ~/github-danny/hyperdata/workspaces/tbox
```

- Add Project to #:h:desktop, symlink at `~/github-danny/hyperdata/workspaces/tbox`

(currently used for doc editing)

- add to VSCode uber-project `~/github-danny/hyperdata/workspaces/projects.code-workspace`

(currently used for git ops)
