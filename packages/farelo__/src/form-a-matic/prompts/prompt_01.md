The goal here will be to develop a nodejs tool called form-a-matic that will create HTML forms from an RDF model supplied in an Turtle syntax style template. The places of interest have keyword-style markers. The paths of those markers will be passed into the HTML as values in class attributes, expressed as underscore separated node names.

The grapoi library from RDF-Ext will be used for accessing the RDF model. A function in form-a-matic will receive an RDF graphas a grapoi dataset. The function will traverse the graph, calling helper functions `createLiteralField(name, path)` and `createURIFied(name, path)`.

For example,

```turtle
<#URI>
    a foaf:Person ;
    foaf:name "LITERAL" ;
    foaf:nick "LITERAL" ;
    foaf:homepage <#URI> ;
    foaf:knows [
        a foaf:Person ;
        foaf:name "LITERAL"
    ] .
```

Will be transformed into something like :

```html
<form>
  <label for="person">Person URI</label>
  <input type="text" class="person uri" name="person" />
  <label for="name">Name</label>
  <input type="text" class="person_name literal" name="name" />
  <label for="nick">Nick</label>
  <input type="text" class="person_nick literal" name="nick" />
  <label for="homepage">Homepage</label>
  <input type="text" class="person_homepage uri" name="homepage" />
  <label for="knows">Knows</label>
  <input type="text" class="person_knows_name literal" name="knows" />
</form>
```

Create a ES module script `form-a-matic.js` to apply this process to `foaf-template.ttl` using RDF-Ext and grapoi.
