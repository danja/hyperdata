# Philomena has Knowledge

**tl;dr** : Phi 3 model running locally on #:tools:ollama is surprising good at ontology work.

## Preramble

Clearly the current generation of artificial intelligence agents lacks the qualities that millions of years of evolution has given biological agents. Most of the current talk of AGI is hype, or at best misguided. The intersection of general intelligence && animal-like intelligence is only a sliver on the Venn diagram. But characteristics akin to those of animals do offer a useful trajectory. We are already at a point where synthetic constructs have intelligence (with caveats). Agency and autonomy are more than viable (caveats++). Perception and communication are already there (minor caveat : mostly divergent from biology's, but still valid). Whatever consciousness is, it seems unlikely to be coming along any time soon ((caveats++)++ : I suspect it's a relatively simple emergent property of cognitive proprioception, very interesting but still, have a quotable : **"Consciousness is Overrated"**.)          

Anyone, my net connection has been out most of the day and most of what I'm working on calls for AI assistance. Out of curiosity I had a little play with Ollama. This was out-of-the-box, no other prompting or anything :

> Tell me synonyms for 'knowledge' and words related to knowdgebases, information store, libraries etc. that I can use to name terms in an OWL ontology expressed in Turtle syntax RDF.  

<blockquote>
In the context of creating a named knowledge base or library using the Web Ontology Language (OWL) and serializing it
into turtle-syntax, which is compatible with Resource Description Framework Schema language (.rdf), you can use various
synonyms for 'knowledge' such as "information", "data" and terms related to repositories of information like “catalog”,
“archive” or “repository”. Here are some examples:

For knowledge representation using OWL, we might want names that clearly reflect the purpose and content:
- Instead of just `KnowledgeBase`, you could use more descriptive ones such as `InfoRealm` (from realm + information).
- For catalogs or libraries, terms like `Catalogarium` (a combination of 'catalog' with '-eanum', a suffix used in
ancient Roman times for public treasuries and archives) may be fitting. However, if that feels too esoteric:
    - A simple yet clear term could be `InformationalResources`. It implies the collection is informative by nature of
its content.
- When weaving these terms into turtle syntax RDF format for your OWL ontology (which defines and categorizes
knowledge), you might structure it as follows:

```turtle
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

# Defining InfoRealm as an ontology class which represents a knowledge base or informational realm
InfoRealm rdfs:subClassOf owl:Class ;
   rdfs:label "Informational Realms"^^xsd:string.

# Catalogarium is another representation of the information store/library within InfoRealm, having its unique identifier
and label as well
Catalogarium rdf:type owl:Class;
           a rdfs:Class ; # or other suitable superclass in OWL like :Dataset if it's more about data collection.
           rdfs:subClassOf InfoRealm .

# A unique identifier for each Catalog within the realm, typically using an integer (UUID) and a readable string label
Catalog uuid:catalogID "Specific-Catalog"^^xsd:string; # Unique Identifier as UUIDs are preferred in many systems.
           rdfs:label "A Specific Catalog of Knowledge Resources";  
            owl:sameAs $uuid:specific-UUID .
```
This snippet defines an ontology class `InfoRealm`, a subclass within it called `Catalogarium` and introduces concrete
instances representing individual catalogs. You can expand upon these definitions by adding properties, individuals
(data points), hierarchies, constraints such as uniqueness of identifiers (`uuid:catalogID`), or other semantic richness
appropriate to your knowledge management context using OWL's expressive power within the RDF/XML serialization format
but here expressed in Turtle for simplicity and conciseness.

Please note that `InfoRealm` and its subclasses should reflect accurately what is being represented, including semantics
about interoperability with other systems (if necessary), access rights or privileges to knowledge resources
(`Catalog`), data provenance details if critical information needs tracking back to sources of origin within the realm.
The ontology would need further expansion depending on how intricate and detailed you wish your representation of this
domain-specific conceptual modeling be, including relations such as `rdfs:seeAlso`, cardinality restrictions with
`owl:maxQualifiedBy` or owl:withMinCardinality for the resources each individual catalog contains.

This setup provides a solid foundation and semantic clarity using OWL to represent your knowledge base ontologically,
which can be extended further into more complex domain-specific models as required by understanding of how this
information is structured or categorized in real life entities like libraries/archives (`Catalogarium`), individual
catalogs within the `InfoRealm`, and their unique identifiers.
</blockquote>

I like `InfoRealm` a lot. A virtual certainty it's been used elsewhere already (I can't place it), but I might well be having that, whatever. I love `Catalogarium`, but for somewhat different reasons.
