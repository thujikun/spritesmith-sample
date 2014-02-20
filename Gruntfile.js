'use strict';

module.exports = function(grunt) {
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sprite: {
      css: {
        src: 'sprite-materials/*.png',
        destImg: 'dist/css/image/spritesheet.png',
        destCSS: 'dist/css/css/sprites.css',
        algorithm: 'alt-diagonal',
        padding: 2,
        cssFormat: 'css',
        cssOpts: {
          functions: false,
          cssClass: function (item) {
            return '.sprite-' + item.name;
          }
        }
      },
      less: {
        src: 'sprite-materials/*.png',
        destImg: 'dist/less/image/spritesheet.png',
        destCSS: 'dist/less/less/sprites.less',
        algorithm: 'diagonal',
        padding: 10,
        cssFormat: 'less',
      },
      sass: {
        src: 'sprite-materials/*.png',
        destImg: 'dist/sass/image/spritesheet.png',
        destCSS: 'dist/sass/sass/sprites.scss',
        algorithm: 'top-down',
        padding: 5,
        cssFormat: 'scss',
      },
      stylus: {
        src: 'sprite-materials/*.png',
        destImg: 'dist/stylus/image/spritesheet.png',
        destCSS: 'dist/stylus/stylus/sprites.styl',
        algorithm: 'left-right',
        padding: 15,
        cssFormat: 'stylus',
      },
      json: {
        src: 'sprite-materials/*.png',
        destImg: 'dist/json/image/spritesheet.png',
        destCSS: 'dist/json/json/sprites.json',
        algorithm: 'binary-tree',
        padding: 20,
        cssFormat: 'json',
      },
    },
  });

  grunt.registerTask('default', [
    'sprite',
  ]);
};
