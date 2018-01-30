Splatoon2.ink Node API Client
=========
[![Build Status](https://travis-ci.org/Dog2puppy/splatoon2.ink-node-api-client.svg?branch=master)](https://travis-ci.org/Dog2puppy/splatoon2.ink-node-api-client)
[![Coverage Status](https://coveralls.io/repos/github/Dog2puppy/splatoon2.ink-node-api-client/badge.svg?branch=master)](https://coveralls.io/github/Dog2puppy/splatoon2.ink-node-api-client?branch=master)
[![npm](https://img.shields.io/npm/v/splatoon2.ink-node-api-client.svg)]()
[![npm](https://img.shields.io/npm/dt/express.svg)](https://www.npmjs.com/package/splatoon2.ink-node-api-client)
[![GitHub stars](https://img.shields.io/github/stars/Dog2puppy/splatoon2.ink-node-api-client.svg?style=social&label=Stars)](https://github.com/Dog2puppy/splatoon2.ink-node-api-client)

An API client for the site Splatoon2.ink.

## Installation

  `npm install splatoon2.ink-node-api-client`

## Usage

    var client = require('splatoon2.ink-node-api-client');

    var currentStages = client.getCurrentStages(); // Object containing regular, ranked, and league stages.


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
