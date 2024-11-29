

## Unsafe

Please create `src/processors/unsafe/RunCommand.js` such that it will run a shell command in a similar fashion to `runCommand()` in `tests/integration/test_apps.spec.js`. The command may be specified in the processor's config (loaded originally from the application's `config.ttl`) or in the message, or neither. The message value will take precedence. If no command value is found, the operation is skipped.

* Application example, contents of dir : `src/applications/test_nop`
* Processor example : `src/processors/util/NOP.js`

Please create unit and integration tests following the pattern of the existing tests in `tests`

prompts/mcp-http-xmpp-sparql.md

repopack first!!!

fix dirwalker, make packer app

## HTTP
* client
* proxy
* server

```prompt
First read the following, analyse with reference to existing code and create a detailed implementation plan as an artifact.
The job is to create `src/processors/http/HttpServer.js` which will run an express-based HTTP server. The server will run as a worker thread using `src/core/WorkerPool.js`. A first application will be defined in `src/applications/test_http-server`. The transmission defined in `src/applications/test_http-server/transmissions.ttl` will have a single processor, `:HttpServer`. The configuration of the server will come from `src/applications/test_http-server/config.ttl`, and will serve the static file `src/applications/test_http-server/data/input/index.html` at `http://localhost:4000/transmissions/test/`. The server will continue running until a HTTP POST is received, at which point it should shut down gracefully and the application should exit.
```

```prompt
The job, in progress, is to create src/processors/http/HttpServer.js which will run an express-based HTTP server. The server will run as a worker thread using src/core/WorkerPool.js. A first application will be defined in src/applications/test_http-server. The transmission defined in src/applications/test_http-server/transmissions.ttl will have a single processor, :HttpServer. The configuration of the server will come from src/applications/test_http-server/config.ttl, and will serve the static file src/applications/test_http-server/data/input/index.html at http://localhost:4000/transmissions/test/. The server will continue running until a HTTP POST is received, at which point it should shut down gracefully and the application should exit. I attach some relevant docs.
Please decided on the next steps and carry them out.
```


## MCP
* client
* proxy?
* server

## XMPP
* client

## SPARQL
* client
* proxy



js mcp
