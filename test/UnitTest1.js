'use strict';
var chai = require('chai');
var chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);

describe('Testing web API abc', function() {
    var host = "https://somewebsite";
    var path = "/somepath";
    it('value1 should be populated', function(done) {
        chai
            .request(host)
            .get(path)
            .set('content-type', 'application/json')
            .end(function(error, response, body) {
                if (error) {
                    done(error);
                } else {
                    var obj = JSON.parse(response.text);
                    
                    //the actual unit test
                    expect(obj.value1).to.not.be.undefined;
                    
                    done();
                }
            });
    });
});