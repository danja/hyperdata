# RDF-EXT documentation

## What is rdf-ext

Rdf-ext is a JavaScript library for working with RDF. RDF is a graph data model defined by the [W3C](https://www.w3.org/standards/semanticweb/) and is widely implemented. If you are new to RDF have a look at our [Linked Data Training](https://github.com/zazuko/linked-data-training/blob/master/Resources.md), we assume some basic knowledge of RDF and its data model in this documentation.

## What is the RDFJS specification

For many years there were multiple RDF libraries and interfaces available in the JavaScript world. In 2013 the [RDF JavaScript Libraries Community Group](https://www.w3.org/community/rdfjs/) was initiated. One of the result of this group is the [RDFJS specification](http://rdf.js.org/), a low-level interface for working with RDF and Linked Data in ECMAScript platforms like Web browsers and Node.js.

All libraries described in this document are based on the RDFJS interface and read/write data structures defined in this specification.

## What are the main packages & what do they do

The RDFJS interface is a low-level interface specification. Next to the core-module `rdf-ext` we provide several other module categories that use the same interface:

- **Parsers & serializers**: RDF is a data model and unlike other data models it is not bound to a particular serialization. There are many different formats available, some are plain-text based, others are JSON or XML based and even a binary files are available. In general, one can convert each serialization to another one without any loss of data. Parser and serializer modules implement the specification of each format and transform it from/to an RDFJS interface structure. We suggest to always use the provided parsers and serializers and avoid doing this in your own code.

- **Stores**: Stores provide a way to persist RDFJS interface structures. This can be a simple in-memory store or a persistent back-end in an RDF graph database (for example a SPARQL endpoint). Each store implements the same abstract interface, if you start with an in-memory store it is easy to switch to a more persistent layer by simply choosing another store implementation. No other code changes are necessary.

In many cases developers want to work with simple interfaces to reduce code complexity and focus on solving problems using RDF. For that reason we introduce modules that are built on top of `rdf-ext`:

- **Dataset**: Dataset is a (work in progress) specification of a high-level interface on top of the RDFJS interface specification. It provides additional functions that facilitate interacting with RDF data. Unless you have a good reason to do so, _this is the library you want to start working with._

- **Helpers**: Helpers provide abstractions for common tasks in the RDF programming world exposed as simple interfaces. While you could implement the functionality that helpers provide on your own, you save quite some lines of code for particular tasks.

## Basics

Note that we only explain our libraries in this document. If you don't understand a particular RDF concept, please follow on the links provided within the text to learn more about it.

A _Triple_ is made up of _subject_, _predicate_ and _object_.

A _Quad_ is a _Triple_ with an additional _context_, whereas the context represents the [graph-concept in RDF 1.1](https://www.w3.org/TR/rdf11-primer/#section-multiple-graphs). We generally use quads in the example code, but often without explicitly declaring the context, this way the triple is simply added to the so-called "[default graph](http://rdf.js.org/#dom-quad-graph)".

### Create a triple/quad

```javascript
const rdf = require("rdf-ext")

let subject = rdf.namedNode("http://example.org/subject")
let predicate = rdf.namedNode("http://example.org/predicate")
let object = rdf.literal("object")

let quad = rdf.quad(subject, predicate, object)

// log the triples to console with toString()
// note that this is N-Triples/N-Quads serialization in rdf-ext
console.log(quad.toString())
```

```shell
foo@bar:~$ node ./create.js
<http://example.org/subject> <http://example.org/predicate> "object" .
```

[Code for this example](https://github.com/rdf-ext/rdf-examples/blob/develop/rdf-ext-basics.js)

In this example we start with an `rdf` object from the `rdf-ext` package. We then create a [subject, a predicate and an object](https://www.w3.org/TR/rdf11-primer/#section-triple). As always with RDF, subject and predicate need to be [IRIs](https://www.w3.org/TR/rdf11-primer/#section-IRI). The object can either be an IRI or a [literal](https://www.w3.org/TR/rdf11-primer/#section-literal), as in our example.

We then create the quad. Here we omit declaring the context for the quad explicitly, therefore the triple is simply added to the so-called "[default graph](http://rdf.js.org/#dom-quad-graph)".

In the last line we use `quad.toString()` to log the triple/quad to the console. In rdf-ext, a triple is always in [N-Triples](https://www.w3.org/TR/rdf11-primer/#section-n-triples) like syntax with one triple per line and a dot at the end of the line. In case of a quad, it will be [N-Quads](https://www.w3.org/TR/n-quads/) syntax. Assuming the example code is stored in a file named `create.js` , the output it will create is shown above.

If you want to create a [blank node](https://www.w3.org/TR/rdf11-primer/#section-blank-node) instead of a named-node, simply use the `blankNode` function:

```javascript
let bnode = rdf.blankNode()
```

### Work with triples

Most of the time we want to work with more than one triple so we need to have some kind of container where we can add multiple triples. While one could do that manually by using arrays, a more suitable structure is `dataset`. By using this structure you get several useful functions, for example a function for matching triples. Also, `dataset` takes care of detecting duplicates, so you don't have to.

Let us describe a person, specifically [Sheldon Cooper](https://en.wikipedia.org/wiki/Sheldon_Cooper) from the TV series The Big Bang Theory. We maintain triples about him in a specific GitHub repository, see [here](https://github.com/zazuko/tbbt-ld/blob/master/data/person/sheldon-cooper.ttl). We will mainly use [schema.org/Person](https://schema.org/Person) as vocabulary in this example.

```javascript
const rdf = require("rdf-ext")

// create a new dataset using the rdf-ext factory
let dataset = rdf.dataset()
let bnode = rdf.blankNode()

dataset.add(
  rdf.quad(
    rdf.namedNode("http://example.org/sheldon"),
    rdf.namedNode("http://schema.org/givenName"),
    rdf.literal("Sheldon")
  )
)
dataset.add(
  rdf.quad(
    rdf.namedNode("http://example.org/sheldon"),
    rdf.namedNode("http://schema.org/familyName"),
    rdf.literal("Cooper")
  )
)
dataset.add(
  rdf.quad(
    rdf.namedNode("http://example.org/sheldon"),
    rdf.namedNode("http://schema.org/address"),
    bnode
  )
)
dataset.add(
  rdf.quad(
    bnode,
    rdf.namedNode("http://schema.org/addressCountry"),
    rdf.literal("US")
  )
)
dataset.add(
  rdf.quad(
    bnode,
    rdf.namedNode("http://schema.org/addressLocality"),
    rdf.literal("Pasadena")
  )
)
dataset.add(
  rdf.quad(
    bnode,
    rdf.namedNode("http://schema.org/addressRegion"),
    rdf.literal("CA")
  )
)
dataset.add(
  rdf.quad(
    bnode,
    rdf.namedNode("http://schema.org/postalCode"),
    rdf.literal("91104")
  )
)
dataset.add(
  rdf.quad(
    bnode,
    rdf.namedNode("http://schema.org/streetAddress"),
    rdf.literal("2311 North Los Robles Avenue, Aparment 4A")
  )
)

// log the triples to console with toString()
// note that this is N-Triples serialization in rdf-ext
console.log(dataset.toString())
```

```shell
foo@bar:~$ node ./dataset-add-triples.js
<http://example.org/sheldon> <http://schema.org/givenName> "Sheldon" .
<http://example.org/sheldon> <http://schema.org/familyName> "Cooper" .
<http://example.org/sheldon> <http://schema.org/address> _:b1 .
_:b1 <http://schema.org/addressCountry> "US" .
_:b1 <http://schema.org/addressLocality> "Pasadena" .
_:b1 <http://schema.org/addressRegion> "CA" .
_:b1 <http://schema.org/postalCode> "91104" .
_:b1 <http://schema.org/streetAddress> "2311 North Los Robles Avenue, Aparment 4A" .
```

[Code for this example](https://github.com/rdf-ext/rdf-examples/blob/develop/dataset-add-triples.js)

While this was fun, this is not what we normally do. It is way more common to load Triples from any RDF serialization and then work on them.

### Parse triples from a file

By installing the npm package `tbbt-ld` you will get several characters of The Big Bang Theory described in [Turtle](https://www.w3.org/TR/turtle/) format. By using the parser package `rdf-parser-n3` we can parse it into a dataset structure. Note that the [N3 parser](https://github.com/rdfjs/N3.js) (used by `rdf-parser-n3`) can parse [Turtle](https://www.w3.org/TR/turtle/), [TriG](https://www.w3.org/TR/trig/), [N-Triples](https://www.w3.org/TR/n-triples/), [N-Quads](https://www.w3.org/TR/n-quads/), and [Notation3 (N3)](https://www.w3.org/TeamSubmission/n3/).

```javascript
const fs = require("fs")
const rdf = require("rdf-ext")
const N3Parser = require("rdf-parser-n3")

// create N3 parser instance
let parser = new N3Parser({ factory: rdf })

// Read a Turtle file and stream it to the parser
let quadStream = parser.import(
  fs.createReadStream("./node_modules/tbbt-ld/data/person/sheldon-cooper.ttl")
)

// create a new dataset and import the quad stream into it (reverse pipe) with Promise API
rdf
  .dataset()
  .import(quadStream)
  .then((dataset) => {
    // loop over all quads an write them to the console
    dataset.forEach((quad) => {
      console.log(quad.toString())
    })
  })
```

[Code for this example](https://github.com/rdf-ext/rdf-examples/blob/develop/parse-turtle-to-dataset.js)

Additional parsers available:

- [JSON-LD](https://github.com/rdfjs/parser-jsonld)

  - [Specification](https://json-ld.org/spec/latest/json-ld/)
  - [Example for Node.js](https://github.com/rdf-ext/rdf-examples/blob/develop/parse-jsonld-to-dataset.js)

  - [Example for browser](https://github.com/rdf-ext/rdf-examples/blob/develop/parse-jsonld-to-dataset.html)

- [RDF/XML](RDF/XML)
  - [Specification](https://www.w3.org/TR/rdf-syntax-grammar/)

### Serialize triples

We already saw the simplest form of serialization: In rdf-ext, the `.toString()` method generates N-Triples or N-Quads. This is also the default behavior for `dataset` structures. This is a great format for exchanging triples and also suitable for large data dumps. It can also be compressed well with standard compression formats like gzip, bzip, etc. For large based datasets the recommended way to serialize to N-Triples is to use the [specific serializer](https://github.com/rdfjs/serializer-ntriples). Let us revisit the dataset example from above and integrate a proper serializer

```javascript
const rdf = require("rdf-ext")
const Readable = require("stream").Readable
const SerializerNtriples = require("@rdfjs/serializer-ntriples")

// create a new dataset using the rdf-ext factory
let dataset = rdf.dataset()
let bnode = rdf.blankNode()

dataset.add(
  rdf.quad(
    rdf.namedNode("http://example.org/sheldon"),
    rdf.namedNode("http://schema.org/givenName"),
    rdf.literal("Sheldon")
  )
)
dataset.add(
  rdf.quad(
    rdf.namedNode("http://example.org/sheldon"),
    rdf.namedNode("http://schema.org/familyName"),
    rdf.literal("Cooper")
  )
)
dataset.add(
  rdf.quad(
    rdf.namedNode("http://example.org/sheldon"),
    rdf.namedNode("http://schema.org/address"),
    bnode
  )
)
dataset.add(
  rdf.quad(
    bnode,
    rdf.namedNode("http://schema.org/addressCountry"),
    rdf.literal("US")
  )
)
dataset.add(
  rdf.quad(
    bnode,
    rdf.namedNode("http://schema.org/addressLocality"),
    rdf.literal("Pasadena")
  )
)
dataset.add(
  rdf.quad(
    bnode,
    rdf.namedNode("http://schema.org/addressRegion"),
    rdf.literal("CA")
  )
)
dataset.add(
  rdf.quad(
    bnode,
    rdf.namedNode("http://schema.org/postalCode"),
    rdf.literal("91104")
  )
)
dataset.add(
  rdf.quad(
    bnode,
    rdf.namedNode("http://schema.org/streetAddress"),
    rdf.literal("2311 North Los Robles Avenue, Aparment 4A")
  )
)

// create the serializer
const serializerNtriples = new SerializerNtriples()
const input = dataset.toStream()
const output = serializerNtriples.import(input)

output.on("data", (ntriples) => {
  console.log(ntriples.toString())
})
```

[Code for this example](https://github.com/rdf-ext/rdf-examples/blob/develop/serialize-dataset-ntriples.js)

You can obviously also stream that directly to a file. Due to the fact that this is stream based, files can be as large as they have to be for your use-case.

Note that with `console.log()` you will get an additional, empty line. This will not happen if you write the output to a file directly.

Additional serializers available:

- [JSON-LD](https://github.com/rdfjs/serializer-jsonld)
  - [Example with a prefix map](https://github.com/rdf-ext/rdf-examples/blob/develop/serialize-jsonld-with-prefix-map.js)
- rdf-formats-common serializer: This is a helper function that facilitates serializing into different formats
  - [Example](https://github.com/rdf-ext/rdf-examples/blob/develop/serialize-formats-common.js)

At the time writing there is no RDF/XML serializer available.

### Using Sink and Source interfaces

In our examples we passed data from one object to another, often using either the `.import()` or `.match()` functions. These functions are defined in the RDFJS specification, more specifically in [Sink](http://rdf.js.org/#sink-interface) and [Source](http://rdf.js.org/#source-interface). Parsers and serializers typically implement the _Sink_ interface and thus provide an `.import()` function. You either pass a text stream (parser) or quad stream (serializer) to this function and it emits either a _quad_ (parser) or a _serialized quad_ (serializer).

The [Store](http://rdf.js.org/#store-interface) interface implements both Source and Sink. If you want to persist data from another structure, you import it to the Store instance by using the `.import()`function. When you want to pass data from a store to another structure, you can use the `.match()` function to get some or all quads back.

Note that there is one exception: [Dataset](https://github.com/rdfjs/representation-task-force/wiki/Dataset-spec) behaves differently and does not implement Source and Sink. Although it does provide both a `.match()` and `.import()` method, they behave differently by design. Please consult the Dataset chapter about why.

In case you do need Sink and Source interfaces on a Dataset structure you need to use [rdf-store-dataset](https://www.npmjs.com/package/rdf-store-dataset) instead, which provides a Source/Sink compatible wrapper around it.

### Using a Store

In the beginning of this document, we introduced the concept of a [Store](http://rdf.js.org/#store-interface). This interface can be used to persist data. When you develop some code this might be a simple in-memory store but sooner or later you want to write the data somewhere, for example into an existing triplestore using SPARQL.

We start with a simple [in-memory store](https://github.com/rdf-ext/rdf-store-dataset) based on the Dataset interface introduced above. However, we work with the store API so we can replace this in-memory back-end with a persistent storage layer with only little code changes.

## What are the other packages, what do they do

### [`rdf-ext`](https://github.com/rdf-ext/rdf-ext)

1. What is this package, when should it be used?
2. With what other packages does it play well? What are the related packages I should check out?
3. What are the main objects or classes, methods and their signature
4. Examples

### [`rdf-dataset-simple`](https://github.com/rdf-ext/rdf-dataset-simple)

1. What is this package, when should it be used?
2. With what other packages does it play well? What are the related packages I should check out?
3. What are the main objects or classes, methods and their signature
4. Examples

---

After that: Same thing but for the rest of the packages.

### [`comunica-browser`](https://github.com/rdfjs/comunica-browser)

### [`data-model`](https://github.com/rdfjs/data-model)

### [`serializer-jsonld`](https://github.com/rdfjs/serializer-jsonld)

### [`serializer-ntriples`](https://github.com/rdfjs/serializer-ntriples)

### [`sink`](https://github.com/rdfjs/sink)

### [`to-ntriples`](https://github.com/rdfjs/to-ntriples)

## API Reference

### rdf-ext

### Dataset

> no, the dataset has a `match()` and `import()` method, but the return values are a little bit different. the rdf-store-dataset can be used, if a source and sink interface is required or a in memory store.
>
> or promise interface. so `import()` accepts a <Quad>Stream, but returns a Promise. that fits better to the rest of the interface.
>
> and `match()` returns a new dataset

[Spec](https://github.com/rdfjs/representation-task-force/wiki/Dataset-spec)

Dataset provides a synchronous interface to interact with quads in JavaScript. As mentioned above, it does provide both a `.match()` and `.import()` method but they behave differently and do not implement the Source & Sink interface.

### Store
