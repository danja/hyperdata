

cd /home/danny/github-danny/hyperdata/packages
git submodule add https://github.com/danja/server.git server

npm init ?


The revert command will create a commit that reverts the changes of the commit being targeted. You can use it to revert the last commit like this:

git revert <commit to revert>
You can find the name of the commit you want to revert using [git log]
( git commit --amend)

git revert 40f7dad0f59f2c4329e604a5b1ebdc90f2ee1308
git revert  02ea6abbefe6d2de13439a6c773315aadaac7046
git revert  c54a2eb1c72513f0ff47ea7af078abad1fb71be5
  git revert 17bd14a2737819d2cc3ab7eacc55c356ffe8cf51
git revert   3d30599ec38765b54f23c7a66157715d5a74e219

- commit: 17bd14a2737819d2cc3ab7eacc55c356ffe8cf51
remote:            path: danny.ayers.name/content-raw/markor-docs/MISC/_.md:9
remote:          - commit: 17bd14a2737819d2cc3ab7eacc55c356ffe8cf51
remote:            path: danny.ayers.name/content-raw/markor-docs/_.md:12
remote:          - commit: 17bd14a2737819d2cc3ab7eacc55c356ffe8cf51
remote:            path: danny.ayers.name/content-raw/markor-docs/__.md:16

:          - commit: 17bd14a2737819d2cc3ab7eacc55c356ffe8cf51
remote:            path: danny.ayers.name/content-raw/markor-docs/MISC/_.md:11
remote:          - commit: 17bd14a2737819d2cc3ab7eacc55c356ffe8cf51
remote:            path: danny.ayers.name/content-raw/markor-docs/_.md:14
remote:          - commit: 17bd14a2737819d2cc3ab7eacc55c356ffe8cf51
remote:            path: danny.ayers.name/content-raw/markor-docs/__.md:18
remote:     

:          - commit: 17bd14a2737819d2cc3ab7eacc55c356ffe8cf51
remote:            path: danny.ayers.name/content-raw/markor-docs/MISC/_.md:13
remote:          - commit: 17bd14a2737819d2cc3ab7eacc55c356ffe8cf51
remote:            path: danny.ayers.name/content-raw/markor-docs/_.md:16
remote:          - commit: 17bd14a2737819d2cc3ab7eacc55c356ffe8cf51
remote:            path: danny.ayers.name/content-raw/markor-docs/__.md:20

- commit: 17bd14a2737819d2cc3ab7eacc55c356ffe8cf51
remote:            path: danny.ayers.name/content-raw/markor-docs/MISC/_.md:15
remote:          - commit: 17bd14a2737819d2cc3ab7eacc55c356ffe8cf51
remote:            path: danny.ayers.name/content-raw/markor-docs/_.md:18
remote:          - commit: 17bd14a2737819d2cc3ab7eacc55c356ffe8cf51
remote:            path: danny.ayers.name/content-raw/markor-docs/__.md:22

- commit: 17bd14a2737819d2cc3ab7eacc55c356ffe8cf51
remote:            path: danny.ayers.name/content-raw/markor-docs/..md:131



git revert 17bd14a2737819d2cc3ab7eacc55c356ffe8cf51
git rm danny.ayers.name/content-raw/markor-docs/MISC/_.md
git revert  17bd14a2737819d2cc3ab7eacc55c356ffe8cf51
git rm danny.ayers.name/content-raw/markor-docs/_.md
git revert 17bd14a2737819d2cc3ab7eacc55c356ffe8cf51
git rm danny.ayers.name/content-raw/markor-docs/__.md

git revert  17bd14a2737819d2cc3ab7eacc55c356ffe8cf51
git rm danny.ayers.name/content-raw/markor-docs/MISC/_.md
git revert 17bd14a2737819d2cc3ab7eacc55c356ffe8cf51
git rm danny.ayers.name/content-raw/markor-docs/_.md
git revert  17bd14a2737819d2cc3ab7eacc55c356ffe8cf51
git rm danny.ayers.name/content-raw/markor-docs/__.md
remote:     

git revert  17bd14a2737819d2cc3ab7eacc55c356ffe8cf51
git rm danny.ayers.name/content-raw/markor-docs/MISC/_.md
git revert  17bd14a2737819d2cc3ab7eacc55c356ffe8cf51
git rm danny.ayers.name/content-raw/markor-docs/_.md
git revert  17bd14a2737819d2cc3ab7eacc55c356ffe8cf51
git rm danny.ayers.name/content-raw/markor-docs/__.md

git revert  17bd14a2737819d2cc3ab7eacc55c356ffe8cf51
git rm danny.ayers.name/content-raw/markor-docs/MISC/_.md
git revert  17bd14a2737819d2cc3ab7eacc55c356ffe8cf51
git rm danny.ayers.name/content-raw/markor-docs/_.md
git revert  17bd14a2737819d2cc3ab7eacc55c356ffe8cf51
git rm danny.ayers.name/content-raw/markor-docs/__.md

git revert  17bd14a2737819d2cc3ab7eacc55c356ffe8cf51
git rm danny.ayers.name/content-raw/markor-docs/..md

---

To add a new package to the monorepo, follow these steps:

1. Create the Package Directory:
   Navigate to the packages directory.
   Create a new directory for your package, e.g., new-package.

2. Initialize the Package:
   Inside the new package directory, create a package.json file with the necessary metadata.

Example package.json:

```
   {
     "name": "new-package",
     "version": "1.0.0",
     "description": "Description of the new package",
     "main": "index.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "keywords": [],
     "author": "Your Name",
     "license": "MIT"
   }
```

3. Add Dependencies:
   If your package depends on other packages in the monorepo, add them to the dependencies section in package.json.
   Example:

```
   {
     "dependencies": {
       "@hyperdata/common": "^1.0.0"
     }
   }
```

4. Create Source Files:
   Add your source files (e.g., index.js) and other necessary files (e.g., README.md, .gitignore) to the package directory.

5. Update Root package.json:
   Ensure the new package is included in the workspaces array in the root package.json.

```
{
     "workspaces": [
       "packages/*"
     ]
   }
   ``

6. Install Dependencies:
Run npm install or yarn install from the root directory to install dependencies and link the new package.

7. Add Build/Test Scripts:

If needed, add build or test scripts to the new package's package.json.

8. Verify Setup:
Ensure the new package is correctly linked and can be imported by other packages in the monorepo.

```
