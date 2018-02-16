'use strict';

const service = require('../services/example-service');

/**
 * Initialise endpoints
 *
 * @param router
 */
module.exports = (router) => {
  /**
   * Example Collection
   */
  router.get('/', (req, res, next) => {
    service.getExamples()
      .then((items) => {
        req.log.info('getExamples() called');

        res.cacheControl({ maxAge: 10 });
        res.json(items);
      })
      .catch(next);
  });

  /**
   * Example Error handling
   */
  router.get('/error', (req, res, next) => {
    service.throwError().catch(next);
  });
};
