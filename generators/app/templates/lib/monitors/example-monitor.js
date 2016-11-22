'use strict';

/**
 * Example Monitor.
 *
 * @public
 */
module.exports = {
  name: "example",
  report: function() {

    // Example healthy status
    var status = 'CONNECTED';
    var connectionString = 'uri://example/'

    return {
      status: status === "CONNECTED" ? "UP" : "DOWN",
      connectionState:  status,
      connectionString: connectionString
    };
  }
};