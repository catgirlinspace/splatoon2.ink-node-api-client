/*eslint-disable unknown-require, no-undef, no-undef, unknown-require*/
'use strict';

var expect = require('chai').expect;
var client = require('../index');

describe('#api', function() {
    it('should give league mode', function() {
        var data = client.getCurrentStages();
        expect(data.league.lobbyMode).to.equal('league');
    });
    it('should give ranked mode', function() {
        var data = client.getCurrentStages();
        expect(data.ranked.lobbyMode).to.equal('ranked');
    });
    it('should give regular mode', function() {
        var data = client.getCurrentStages();
        expect(data.regular.lobbyMode).to.equal('regular');
    });
});
