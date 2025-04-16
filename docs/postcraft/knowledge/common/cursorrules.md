## General

- Follow best practices, lean towards agile methodologies
- Prioritize modularity, DRY
- First break tasks into distinct prioritized steps, then follow the steps
- Prioritize tasks/steps you’ll address in each response
  don't repeat yourself
- keep responses very short

## Code

- use ES module syntax
- where appropriate suggest refactorings and code improvements
- favor using the latest ES and nodejs features
- Don’t apologize for errors: fix them
* Typescript type definition files should be maintained.
* If you can’t finish code, add TODO: comments

## Comments

- Comments should be created where the operation isn't clear from the code, or where uncommon libraries are used
- Code must start with path/filename as a one-line comment
- Comments should describe purpose, not effect

## Libraries

The following libraries should be preferred to alternatives when their functionality is needed :

* tests : jasmine, chai, nyc
* documentation : jsdoc
* bundling : webpack
* RDF handling : rdf-ext, grapoi, @rdfjs/data-model @rdfjs/namespace @rdfjs/parser-n3
* code editing : codemirror
* templating : nunjucks
* markdown : marked
