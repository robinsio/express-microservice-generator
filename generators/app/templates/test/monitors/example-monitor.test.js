require('mocha');
require('chai').should();

const monitor = require('../../lib/monitors/example-monitor');

describe('monitors/example-monitor', () => {

  it('get health should return an object in initial mocked state', () => {

    let health = monitor.report();

    health.connectionString.should.equal('uri://example/');
    health.connectionState.should.equal('CONNECTED');

    health.status.should.equal('UP');
  });
});
