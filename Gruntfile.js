module.exports = function(grunt) {
  var defaultTasks = ['jshint', 'concat', 'uglify']; // used for watch as well

  var files = ['comparer.js', 'bookmarklet.js'];

  grunt.initConfig({
    jshint: {
      all: files
    },

    concat: {
      all: {
        src: ['lodash.min.js'].concat(files),
        dest: 'hsmatch.all.js',
      }
    },

    uglify: {
      all: {
        files: {
          'hsmatch.min.js': ['lodash.min.js'].concat(files)
        }
      }
    },

    watch: {
      all: {
        files: files,
        tasks: defaultTasks,
        options: {
          debounceDelay: 250
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', defaultTasks);

  var growl = require('growl');

  ['warn', 'fatal'].forEach(function(level) {
    grunt.util.hooker.hook(grunt.fail, level, function(opt) {
      growl(opt.name, {
        title: opt.message,
        image: 'Console'
      });
    });
  });
};