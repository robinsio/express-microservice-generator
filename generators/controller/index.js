'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.NamedBase.extend({

  writing: function() {
    this.fs.copy(
      this.templatePath('controller.js'),
      this.destinationPath('/lib/controllers/'+ this.name +".js")
    )
  }
});
