<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# in a node project, how do you refer to, and include another project on the local filesystem or github, as if you were you were adding an npm dependency. Both the parent project and the child project have a package.json

To include another project in a Node.js project as if adding an npm dependency, you can use either local filesystem paths or GitHub repositories. Both the parent and child projects must have a `package.json` file for this to work. Below are the methods:

## **1. Including a Local Project**

You can include a local project using either `npm install` or `npm link`.

### **Method 1: Using `npm install`**

- Navigate to the parent project's directory.
- Run the following command:

```
npm install /path/to/local/project
```

Replace `/path/to/local/project` with the absolute or relative path to the child project's directory containing its `package.json`. This will add the local project as a dependency and update the `dependencies` section of the parent project's `package.json` with the local path[^1][^2].


### **Method 2: Using `npm link`**

- Navigate to the child project's directory and run:

```
npm link
```

This creates a global symlink for the child project.
- Then, navigate to the parent project's directory and run:

```
npm link &lt;package-name&gt;
```

Replace `&lt;package-name&gt;` with the name specified in the child project's `package.json`. This links the child project into the parent project[^1].

**Note:** Use `npm unlink` or `npm rm --global &lt;package-name&gt;` to remove links when no longer needed[^1].

---

## **2. Including a GitHub Repository**

You can include a GitHub-hosted project directly by specifying its repository URL in your parent project's `package.json`.

### **Method: Using GitHub URL**

- In the parent project's `package.json`, add an entry under `dependencies` like this:

```json
"dependencies": {
  "child-project": "github:username/repository-name#branch-or-tag"
}
```

Replace:
    - `username/repository-name` with the GitHub repository's details.
    - `branch-or-tag` with a specific branch, tag, or commit hash (optional).
- Alternatively, run this command to install directly:

```
npm install git+https://github.com/username/repository-name.git
```


This approach works for both public and private repositories (if you have access credentials)[^3][^4].

---

## **Considerations**

- **Local Projects:** Ideal for development when both projects are on your local machine.
- **GitHub Repositories:** Useful for sharing code across teams or projects without publishing it to npm.
- Ensure compatibility between your projects (e.g., matching Node.js versions).

<div>⁂</div>

[^1]: https://www.geeksforgeeks.org/how-to-install-a-local-module-using-npm/

[^2]: https://www.geeksforgeeks.org/how-local-installation-of-a-dependency-done/

[^3]: https://blog.jim-nielsen.com/2018/installing-and-building-an-npm-package-from-github/

[^4]: https://www.geeksforgeeks.org/how-to-install-an-npm-package-directly-from-github/

[^5]: https://stackoverflow.com/questions/62286224/how-to-use-a-git-repository-as-a-dependency-and-import-the-dependency

[^6]: https://docs.npmjs.com/cli/v8/commands/npm-install/

[^7]: https://www.pluralsight.com/resources/blog/guides/install-npm-packages-from-gitgithub

[^8]: https://stackoverflow.com/questions/23210437/npm-install-private-github-repositories-by-dependency-in-package-json

[^9]: https://www.viget.com/articles/how-to-use-local-unpublished-node-packages-as-project-dependencies/

[^10]: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment

[^11]: https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file/

[^12]: https://stackoverflow.com/questions/70670144/how-to-build-node-js-projects-against-local-versions-of-the-dependencies

[^13]: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/nodejs-platform-dependencies.html

[^14]: https://sentry.io/answers/npm-difference-between-dependencies/

[^15]: https://blog.back4app.com/node-js-dependency-management/

[^16]: https://nodejs.org/en/blog/npm/npm-1-0-global-vs-local-installation

[^17]: https://sentry.io/answers/update-dependencies-in-package-json/

[^18]: https://www.geeksforgeeks.org/what-is-global-installation-of-dependencies-in-node-js/

[^19]: https://cloud.google.com/functions/docs/writing/specifying-dependencies-nodejs

[^20]: https://www.npmjs.com/package/install-local

[^21]: https://docs.github.com/en/rest/dependency-graph/dependency-submission

[^22]: https://www.warp.dev/terminus/npm-install-from-github

[^23]: https://dev.to/zirkelc/automatically-install-npm-dependencies-on-git-pull-bg0

[^24]: https://stackoverflow.com/questions/64578883/how-to-add-a-project-built-with-node-to-github

[^25]: https://docs.npmjs.com/using-npm-packages-in-your-projects/

[^26]: https://stackoverflow.com/questions/70632671/how-to-install-npm-dependencies-of-a-github-action

[^27]: https://auth0.com/blog/developing-npm-packages/

[^28]: https://dev.to/baliachbryan/streamlining-your-nextjs-project-with-private-githubgitlab-repositories-as-npm-packages-35oj

[^29]: https://docs.npmjs.com/cli/v9/using-npm/developers/

[^30]: https://www.sitepoint.com/npm-guide/

[^31]: https://www.warp.dev/terminus/npm-install-dev-dependencies

[^32]: https://dev.to/dimpiax/nodejs-using-local-module-in-projects--e34

[^33]: https://www.geeksforgeeks.org/node-js-npm-node-package-manager/

[^34]: https://docs.npmjs.com/downloading-and-installing-packages-locally/

[^35]: https://dev.to/olumidenwosu/implementing-continuous-integration-for-nodejs-apps-with-github-actions-1ag2

[^36]: https://www.pluralsight.com/resources/blog/guides/set-up-a-github-project-with-node-module

