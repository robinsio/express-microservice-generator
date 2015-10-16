'use strict';

/*
 * Dependencies
 */
var VitalSigns = require('vitalsigns');

module.exports = function () {
  var vitals = new VitalSigns();

  // Add a custom health check for a custom monitor by adding the line below;
  //
  // vitals.monitor(require('./monitors/my-custom-monitor'));
  // vitals.unhealthyWhen('myCustomMonitor', 'message').equals("Goodbye");

  return vitals;
};
