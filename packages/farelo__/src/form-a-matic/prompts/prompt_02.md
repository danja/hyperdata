The goal here will be to develop a nodejs tool called turtle2json that will create JSON objects from an RDF model supplied in a template given in approximate Turtle syntax. The template will be tree-shaped, with places of interest having keyword markers, '#ROOT', 'LITERAL' and '#URI' or being RDFS classes. Apart from being tree-shaped, turtle2json will have no other information about the specific classes and properties used in the RDF. In this respect it should be general-purpose.

turtle2json will contain a JS class 'fam', with the necessary methods to recursively walk the RDF tree. Create turtle2json.js as an ES style module and make the methods small, adding one-line comments to describe their functionality.
The following is an example of the desired input and output.

```turtle
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<#ROOT>
    a foaf:Person ;
    foaf:name "LITERAL" ;
    foaf:mbox <#URI> ;
    foaf:homepage <#URI> ;
    foaf:nick "LITERAL" ;
    foaf:depiction <#URI> ;
    foaf:interest <#URI> ;
    foaf:knows [
        a foaf:Person ;
        foaf:name "LITERAL"
    ] .
```

```javascript
{
  ROOT: {
    namespace: "http://xmlns.com/foaf/0.1/";
    type: "Person";
    properties: [
      { key: "name", type: "LITERAL" },
      { key: "mbox", type: "URI" },
      { key: "homepage", type: "URI" },
      { key: "nick", type: "LITERAL" },
      { key: "depiction", type: "URI" },
      { key: "interest", type: "URI" },
      {
        key: "knows",
        type: "BNODE",
        children: {
          type: "Person",
          node: [
            { key: "name", type: "LITERAL" },
            { key: "nick", type: "LITERAL" },
            { key: "homepage", type: "URI" },
          ],
        },
      },
    ];
  }
}
```
