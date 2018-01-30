/*eslint-disable unknown-require, no-undef, no-undef, unknown-require*/
'use strict';

var expect = require('chai').expect;
var client = require('../index');

describe('#api', function() {
    it('should give league mode', function() {
        var data = client.getCurrentStages();
        expect(data.league.lobbyMode).to.equal('league');
    });
});
