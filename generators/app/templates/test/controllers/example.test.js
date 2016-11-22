'use strict';

var mocha   = require('mocha');
var should  = require('chai').should();
var sinon   = require('sinon');
var request = require('supertest-as-promised');

var app     = require('../../app');
var config  = require('konfig')({ path: 'config' });
var service = require('../../lib/services/example-service');

describe('controllers/example', function() {
  var sandbox, getExamplesStub;

  var basePath = config.app.microservice.server.name;
  var examples = [{
    "id": 1,
    "name": "movies"
  }, {
    "id": 2,
    "name": "shows"
  }];

  beforeEach(function(done) {
    sandbox = sinon.sandbox.create();
    getExamplesStub = sandbox.stub(service, 'getExamples');

    done();
  });

  afterEach(function(done) {
    sandbox.restore();
    done();
  });

  it('should return a list of Examples when GET /example is requested', function(done) {
    getExamplesStub
        .yields(null, examples);

    request(app)
        .get('/' + basePath + '/example')
        .set('Accept', 'application/json')
        .expect(function(res) {
          res.body[0].id.should.equal(1);
          res.body[0].name.should.equal('movies');
          res.body[1].id.should.equal(2);
          res.body[1].name.should.equal('shows');
        })
        .expect(200, done);
  });
});
