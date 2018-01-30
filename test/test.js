 'use strict';

var expect = require('chai').expect;
var client = require('../index');

describe('#api', function() {
    it('should give API version', function() {
        var data = client.getCurrentStages();
        expect(data.apiVersion).to.equal('0.1.1');
    });
});
