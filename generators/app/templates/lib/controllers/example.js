'use strict';

var log     = require('../logger');
var service = require('../services/example-service');

/**
 * Initialise Items endpoints
 *
 * @param router
 */
module.exports = function(router) {

  /**
   * Example Collection
   */
  router.get('/', function(req, res, next) {

    service.getExamples({}, function(err, items) {
      if (err) return next(err);

      log.info('Correlation identifier generated', { correlationId: res.locals.correlationId });

      res.cacheControl({ maxAge: 10});
      res.json(items);
    });
  });

  /**
   * Example Error handling
   */
  router.get('/error', function(req, res, next) {

    service.throwError(function(err) {
      if (err) return next(err);

      // Example won't hit this...
      res.sendStatus(200);
    });
  });

};
