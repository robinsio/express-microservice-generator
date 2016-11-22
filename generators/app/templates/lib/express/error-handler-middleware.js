'use strict';

/*
 * Dependencies
 */
var log = require('../logger');

/**
 * Middleware to handler specific application errors.
 *
 * @param options
 */
module.exports = function (options) {
  return function (err, req, res, next) {

    switch(err.name) {
        // Handle the Error 'ResourceNotFound'
      case 'ResourceNotFoundError':
        res.status(404).json({ name: err.name, message: err.message, errors: err.errors });
        break;

        // Handle other Errors here...

        // Default Error handling...
      default:
        log.error(err, 'Uncaught Error');
        res.status(500).json({ name: err.name, message: err.message, errors: err.errors });
        break;
    }
  };
};
