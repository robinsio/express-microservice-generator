'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

var os = require('os');

describe('microservice:app', function () {

  // TODO - Add more test coverage
  it('creates files', function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
        .withOptions({ skipInstall: true })
        .withPrompts({ name: 'test-v1', microservice: 'test/v1', entitlements: true, nvmrc: true })
        .then(function (dir) {
          assert.file('test-v1/app.js');
          assert.file('test-v1/package.json');
          assert.file('test-v1/README.md');
          assert.file('test-v1/.nvmrc');
          assert.file('test-v1/.gitignore');
          assert.file('test-v1/.eslintrc');
        });
  });
});
