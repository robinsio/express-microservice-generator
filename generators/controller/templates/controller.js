'use strict';

const log     = require('../logger');
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

        res.cacheControl({ maxAge: 10});
        res.json(items);
      })
      .catch(next);
  });
};
