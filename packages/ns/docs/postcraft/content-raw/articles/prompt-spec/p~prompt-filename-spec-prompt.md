
Can you please specify the following more formally as a short spec doc - it will only be a convention. Include examples, also the BNF and examples of useful regexes. Check if there are any terms in RDF vocabularies that may add value.

# Agent Prompt Filename Convention

* A filename beginning with the characters p~ should be interpreted as a prompt, request or instruction for an agent
* the subsequent characters will be a descriptive name, as typical files are named
* the name will terminate with a . and an extension hinting the media type, per convention
* if the sequence beginning _v is found in the name, the characters that follow should be interpreted as a semantic version, according to that spec
* if the sequence matching _YYYY-MM-DD, that will be interpreted as a W3C DTF/ISO 8601 date, like 2024-02-14


file:///home/danny/github-danny/hyperdata-static/xmlns/glink/index.html
