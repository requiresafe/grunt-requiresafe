'use strict';

var Nsp = require('nsp');
var Fs = require('fs');

module.exports = function (grunt) {

  grunt.registerTask('nsp', 'Audits package.json / shrinkwrap agains the Node Security (+) API', function () {

    var done = this.async();
    var config = grunt.config.get('nsp');

    var payload = {};
    var formatter = Nsp.formatters.default;
    var failOnVulns = config.failOnVulns === undefined ? true : config.failOnVulns;

    if (config.package) {
      payload.package = config.package;
    }

    if (config.shrinkwrap) {
      payload.shrinkwrap = config.shrinkwrap;
    }

    if (config.output) {
      formatter = Nsp.getFormatter(config.output);
    }

    // Command line option --package
    if (grunt.option('package')) {
      payload.package = grunt.file.readJSON(grunt.option('package'));
    }

    // Command line option --shrinkwrap
    if (grunt.option('shrinkwrap')) {
      payload.shrinkwrap = grunt.file.readJSON(grunt.option('shrinkwrap'));
    }

    if (grunt.option('output')) {
      formatter = Nsp.getFormatter(grunt.option('output'));
    }

    Nsp.check(payload, function (err, data) {

      var output = formatter(err, data);

      if (config.outputFile) {
        Fs.writeFileSync(config.outputFile, output);
      }

      if (err || (data.length > 0 && failOnVulns)) {
        grunt.fail.warn(output);
        return done();
      }

      // No error or findings
      grunt.log.write(output);
      return done();
    });


  });
};
