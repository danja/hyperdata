# Creating a new `hyperdata` project

#:farelo
#:h
#:todo automate

## Set up in repo

- create GitHub repo with README.md etc.

```sh
cd /home/danny/github-danny/hyperdata/packages
git submodule add https://github.com/danja/hyperdata-package-template.git hyperdata-package-template
git submodule init hyperdata-package-template
cd hyperdata-package-template

# npm install
# npm init -y
# npm update

```

## Create Workspaces

```
ln -s ~/github-danny/hyperdata/packages/hyperdata-package-template/docs/postcraft/content-raw ~/github-danny/hyperdata/workspaces/hyperdata-package-template

# mkdir ~/github-danny/hyperdata/packages/tbox/docs

# cp -r ~/github-danny/postcraft/postcraft-template ~/github-danny/hyperdata/packages/tbox/docs/postcraft
```

init

```sh
npm install jsdoc --save-dev
npm install  jasmine jasmine-core jasmine-spec-reporter jasmine-browser-runner webpack webpack-cli webpack-dev-server repomix --save-dev

```

```sh
cd /home/danny/github-danny/hyperdata/packages
git submodule add https://github.com/danja/cognitive-composer.git cognitive-composer
cd cognitive-composer

cd /home/danny/github-danny/hyperdata/packages
git submodule add https://github.com/danja/tbox.git tbox
```

#:seeAlso [working-with-submodules](https://github.blog/open-source/git/working-with-submodules/)

## Create package.json

```sh
cd trans-dev
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
