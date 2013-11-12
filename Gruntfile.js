module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      // Следим за файлами, выполняем таски при каждом изменении
      options: {
        // При вызове в терминале `grunt watch`
        // сначала выполнятся все таски и потом начнётся слежение
        atBegin: true
      },

      js: {
        // Все файлы в папке src/script/ (включая подпапки)
        files: 'src/script/**/*.js',
        tasks: ['concat:js', 'closure-compiler']
      },

      css: {
        // Тоже самое с src/css
        files: 'src/css/**/*.css',
        tasks: ['concat:css', 'csso']
      }
    },
    js: {
        files: 'build/css/all.css',
        tasks: ['closure-compiler']
    },
    concat: {
      // Склеить
      js: {
        files: {
          // Все файлы разом, подключаются в указанном порядке
          'temp/all.js': [
            'src/scripts/jquery-1.9.1.js',
            'src/scripts/jquery-ui-1.10.3.custom.min.js',
            'src/scripts/color.js',
            'src/scripts/green_blue_palette.js',
            'src/scripts/red_palette.js',
            'src/scripts/color_output.js',
            'src/scripts/color_input.js',
            'src/scripts/application.js'
          ] 
        }
      },
      css: {
        files: {
          'build/css/all.css': 'src/css/**/*.css'
        }
      }
    },
    'closure-compiler': {
      frontend: {
        closurePath: 'closure-compiler',
        js: 'temp/all.js',
        jsOutputFile: 'build/js/all.js',
        noreport: true,
        options: {}
      }
    },
    csso: {
      // Cжать стили
       main: {
        files: {
          'build/css/all.css': 'build/css/all.css'
        }
      }
    }
  });

  // Загружаем установленные задачи
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-csso');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-closure-compiler');

  // Задача по умолчанию (`grunt` в терминале)
  grunt.registerTask('default', ['concat', 'csso', 'closure-compiler']);

};