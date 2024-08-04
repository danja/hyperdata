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
