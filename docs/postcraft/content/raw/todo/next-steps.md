# hyperdata next steps

## Semem

* adapt tools to APIs
* attach to transmissions
* add grafana dashboards

process of migrating from Jasmine for tests to Vitest. Many of the old tests are out of sync with the code, so we can be brutal about replacing the old tests with new ones. If in doubt, assume the code functions correctly, and test errors are due to errors in the tests. As you create replacements, please delete the old tests as you go along.

cd /ubuntu/home/danny/hyperdata/semem && npx vitest run tests/unit/api/features/MemoryAPI.test.js tests/unit/api/features/ChatAPI.test.js tests/unit/api/features/SearchAPI.test.js tests/integration/api/APIEndpoints.integration.test.js

Update documentation in docs/api to include the current implementation status.

Extend the search browser interface to support interaction with all the APIs as documented under /ubuntu/home/danny/hyperdata/semem/docs/api . Use vanilla JS. Include console logging of key events and errors.

Create an MCP server proxy which will access the APIs. Follow the latest spec from Anthropic.

 bash -c 'kill $(ps -ef | grep "[n]ode.*api-server\.js" | awk "{print \$2}") && node api-server.js &'   

## Postcraft

* get sparqlstore-to-html working


* Octotools paper to help describe big picture

## trestle

Make a list of the components that need to be created corresponding to the nav toolbar in index.html, then create skeleton code for each in turn. Design for modularity. Remember we will be using lightweight vanilla JS with ES modules.

We are in the
