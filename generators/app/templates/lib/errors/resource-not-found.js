module.exports = class ResourceNotFoundError extends Error {
  constructor(message, causedBy, error) {
    super(message);

    // Capturing stack trace, excluding constructor call from it.
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.causedBy = causedBy;
    this.error = error;
  }
};
