'use strict';

// Example Error
module.exports = require('custom-error-generator')('ResourceNotFoundError', null, function (message, causedBy, error) {
  this.message = message;
  this.causedBy = causedBy;
  this.error = error;
});
