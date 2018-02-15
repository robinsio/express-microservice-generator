# <%= name %>

## Tech

* [node.js] - Evented I/O for the backend
* [Express] - Fast node.js network app framework [@tjholowaychuk]
* [nvm] - Node Version Management

## Installation

You need [node.js] installed globally to run the app. We recommend you manage your Node versions with [nvm]. 

### nvmrc

If you have included the default .nvmrc in the build. Run the following to cmd to switch to the 
specified Node version:

```sh
$ nvm use
```

Then to install the packages:

```sh
$ npm install
```

## Tests

Tests are run using the [mocha] framework and include a coverage check as default.

Run tests:

```sh
$ npm test
```

### Lint

A default Javascript style lint (.eslintrc) has been included in this build. To ensure that the JS files conform to the lint, run:

```sh
$ npm run lint
```

[node.js]:http://nodejs.org
[express]:http://expressjs.com
[nvm]:https://github.com/creationix/nvm
