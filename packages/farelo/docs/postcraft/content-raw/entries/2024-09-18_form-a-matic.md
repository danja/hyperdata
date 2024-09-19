# Form-a-Matic Dev

[Previous notes](https://danny.ayers.name/entries/2024-09-10_goon.html)

Last night -

Ops. I was in the process of moving Farelo to the #hyperdata monorepo, so I've got (at least) two different dirs...
```
/home/danny/github-danny/hyperdata/packages/farelo
/home/danny/github-danny/farelo
```
Two different repos.

The `form-a-matic` source so far is a transmission defined under `trans-apps` using services under transmissions. I have notes on shifting the services elsewhere, but that's not high priority.

---

Grr. Where did I put the source JS?
```
/home/danny/github-danny/trans-apps/applications/form-a-matic/
```
TODO The JS bits should go in the `farelo` package.

Later.

The primary use case is for simple tree-shaped data. So I've decided that I want an intermediate JSON object representation. There is JSON-LD but for now I'll got quick & dirty.

I need a Turtle file -> dataset -> grapoi treewalker -> JSON

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

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
    namespace: 'http://xmlns.com/foaf/0.1/'
    type: 'Person'
    properties:
      [
        {key: 'name', type:'LITERAL' },
        {key: 'mbox', type:'URI'},
        {key: 'homepage', type:'URI'},
        {key: 'nick', type:'LITERAL'},
        {key: 'depiction', type:'URI'},
        {key: 'interest', type:'URI'},
        {key: 'knows', type:'BNODE',
        children: {
            type: 'Person',
            node: [
                    {key: 'name', type:'LITERAL'},
                    {key: 'nick', type:'LITERAL'},
                    {key: 'homepage', type:'URI'}
            ]
        }
      }
      ]
  }
}
```

The current source I got mostly from Claude, using a Project loaded with repopacks of the relevant RDF-Ext libs. Rather than work from the current version, I think it'll be better to give it these examples, see how it does.

Ok, I gave Claude prompt_01.md and, after a couple of cycles, he's given me something that appears very close to what I'm after. I should be able to make the necessary tweaks manually.

Kinda funny, I asked Claude to use RDF-Ext/grapoi for treewalking, but instead he went for :
```javascript
import N3Parser from '@rdfjs/parser-n3'
```

After a dogwalk, it's occured to me that some extra hints in the pseudo-Turtle/JSON might be useful for HTML UI construction.

1. multiple values
2. more distinctly typed values
3. human language alternatives

Of these 1. is must-have - in the FOAF example, the ability to add multiple `foaf:knows`. Given the logic of RDF this should probably be the default.

What I have in mind for 2. is something that would hint at using checkboxes, or list drop-downs, numeric fields, passwords - scripted validation would be nice. But for now I'll only consider checkboxes.  

Languages might take a bit of setting up on the HTML side, but I guess it's worth including a flag in the pseude-Turtle now, so it'll be available if & when I get to that bit.
