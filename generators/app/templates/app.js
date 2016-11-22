'use strict';

/*
 * Dependencies
 */
var config       = require('konfig')({ path: 'config' });
var errorHandler = require('./lib/express/error-handler-middleware.js');
var express      = require('express');
var log          = require('./lib/logger');
var micro        = require('express-microservice-starter');

var app  = express();

app.use(micro({
  discoverable: true,
  controllersPath: 'lib/controllers',
  monitorsPath: 'lib/monitors',
  correlationHeaderName: 'X-Unity-CorrelationID',
  debug: false
}));

// Use the Error handling middleware
app.use(errorHandler());

app.listen(process.env.PORT || config.app.server.port, function onListen() {
  log.info('Initialised ' + config.app.microservice.server.name);
});

module.exports = app;
