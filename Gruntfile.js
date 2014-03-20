'use strict';

module.exports = function(grunt) {

  // Carga todas las dependencias de tareas que indicamos en el Package.json
  require('load-grunt-tasks')(grunt);

  // Tareas por defecto
  grunt.registerTask('default', ['connect:livereload','watch'])

  // Configuración de las tareas
  grunt.initConfig({

    // Vigila los cambios que se efectuan en los archivos y ejecuta
    // las tareas asignadas
    watch: {
      // Esto nos permite que el navegador se recargue con cada cambio
      // que hagamos en el código
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          './css/estilos.css',
          './index.html',
          './img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      },
      styles: {
        files: ['./stylus/{,*/}*.styl'],
        tasks: ['stylus']
      }
    },

    // Automatiza el proceso de compilado de Stylus a CSS y su minificación
    stylus: {
      compile: {
        options: {
          paths: ['./stylus/{,*/}*.styl'],
          'include css': true
        },
        files: {
          './css/estilos.css': './stylus/estilos.styl'
        }
      }
    },

    // Crea un servidor web de desarrollo para utilizar en local
    connect: {
      options: {
        port: 9000,
        hostname: '0.0.0.0',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: ['./']
        }
      }
    }

  });

};
