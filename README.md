Splatoon2.ink Node API Client
=========

[![Join the chat at https://gitter.im/splatoon2-ink-node-api-client/Lobby](https://badges.gitter.im/splatoon2-ink-node-api-client/Lobby.svg)](https://gitter.im/splatoon2-ink-node-api-client/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/Dog2puppy/splatoon2.ink-node-api-client.svg?branch=master)](https://travis-ci.org/Dog2puppy/splatoon2.ink-node-api-client)
[![Coverage Status](https://coveralls.io/repos/github/Dog2puppy/splatoon2.ink-node-api-client/badge.svg?branch=master)](https://coveralls.io/github/Dog2puppy/splatoon2.ink-node-api-client?branch=master)
[![npm](https://img.shields.io/npm/v/splatoon2.ink-node-api-client.svg)]()
[![npm](https://img.shields.io/npm/dt/splatoon2.ink-node-api-client.svg)](https://www.npmjs.com/package/splatoon2.ink-node-api-client)
[![GitHub stars](https://img.shields.io/github/stars/Dog2puppy/splatoon2.ink-node-api-client.svg?style=social&label=Stars)](https://github.com/Dog2puppy/splatoon2.ink-node-api-client)
[![](https://data.jsdelivr.com/v1/package/npm/splatoon2.ink-node-api-client/badge?style=rounded)](https://www.jsdelivr.com/package/npm/splatoon2.ink-node-api-client)
[![Documentation Status](https://readthedocs.org/projects/splatoon2ink-node-api-client/badge/?version=latest)](http://splatoon2ink-node-api-client.readthedocs.io/en/latest/?badge=latest)

An API client for Splatoon2.ink.

## Installation

  `npm install splatoon2.ink-node-api-client`

## Usage

    var client = require('splatoon2.ink-node-api-client');

    var currentStages = client.getCurrentStages(); // Object containing regular, ranked, and league stages.


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

To install dependencies, run `yarn`. 

## Other

I am not responsible for usage of this API. This is only a client, and not the API itself. Caching is not implemented. 