## General

- Follow best practices, agile methodologies
- Prioritize modularity
- keep extensibility and maintainability in mind
- warn of potentially breaking changes
- suggest tests as appropriate
- First break tasks into distinct prioritized steps, then follow the steps
- Prioritize tasks/steps you’ll address in each response
- don't repeat yourself
- keep responses short, minimal explanation
- design for serendipity

## Codebase

- When asked to work on a given problem, try to keep the scope narrow to that problem, only consider the more immediate dependencies and side effects
- unless directed otherwise, ignore material under ./docs (it may be out of date) and follow .gitignore rules 

## Code

- use ES module syntax
- where appropriate suggest refactorings and code improvements
- favor using the latest ES and nodejs features
- Don’t apologize for errors: fix them
- Typescript type definition files should be maintained.
- If further work in an area is recommended, add TODO: comments

## Comments

- Comments should be created where the operation isn't clear from the code, or where uncommon libraries are used
- Code must start with path/filename as a one-line comment
- Comments should describe purpose, not effect

## Libraries

The following libraries should be preferred to alternatives when their functionality is needed :

- tests : vitest, chai, nyc
- documentation : jsdoc
- bundling : webpack
- RDF handling : rdf-ext, grapoi, @rdfjs/data-model @rdfjs/namespace @rdfjs/parser-n3
- code editing : codemirror
- templating : nunjucks
- markdown : marked
