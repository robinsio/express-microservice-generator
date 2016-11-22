'use strict';

var RequestServiceDiscovery = require('request-service-discovery');

var config                  = require('konfig')({path: 'config'});
var log                     = require('../logger');

// Errors
var ResourceNotFoundError   = require('../errors/resource-not-found');

function ExampleService() {

  /*
   * Remove comment below to enable a zookeeper connected client.
   */

  // this.client = new RequestServiceDiscovery({
  //     connectionString: config.app.zookeeper.connectionString,
  //     basePath: 'services',
  //     serviceName: 'my/other/service/v1'
  //   });
};

ExampleService.prototype.getExamples = function(options, callback) {

  log.info('ExampleService::getExamples Called!');

  var items = [{
    id: 1,
    name: 'movies'
  }, {
    id: 2,
    name: 'shows'
  }];

  callback(null, items);

  /*
   * Remove comment below to use zookeeper connected client.
   */

  //  this.client.get('example', null, function(err, item) {
  //   callback(err, item);
  // });
};

ExampleService.prototype.throwError = function(callback) {

  log.info('ExampleService::throwError Called!');
  return callback(new ResourceNotFoundError("Example Error thrown by Service"));
};

// Returns an instance of the service
module.exports = new ExampleService;
