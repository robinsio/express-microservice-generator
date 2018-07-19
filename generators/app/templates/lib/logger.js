const bunyan = require('bunyan');
const config = require('konfig')({path: 'config'});

const options = {
  name: config.app.microservice.server.name,
  level: config.app.log.level
};

module.exports = bunyan.createLogger(options);
