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
        // Все файлы в папке www/js (включая подпапки)
        files: 'src/script/**/*.js',
        tasks: ['concat:js', 'uglify']
      },
      css: {
        // Тоже самое с www/css
        files: 'src/css/**/*.css',
        tasks: ['concat:css', 'autoprefixer']
      }
    },
    concat: {
      // Склеить
      js: {
        files: {
          // Все файлы разом, подключаются в указанном порядке
          'bild/js/all.js': [
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
          'bild/css/all.css': 'src/css/**/*.css'
        }
      }
    },
    autoprefixer: {
      // Расставить необходимые префиксы в ЦСС
      main: {
        files: {
          'bild/css/all.css': 'bild/css/all.css'
        }
      }
    },
    uglify: {
      // Сжать скрипты
      main: {
        files: {
          'bild/js/all.js': 'bild/js/all.js'
        }
      }
    },
    csso: {
      // Cжать стили
      // Ссылаемся на autoprefixer, чтобы не повторяться
      main: '<%= autoprefixer.main %>'
    }
  });

  // Загружаем установленные задачи
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-csso');

  // Задача по умолчанию (`grunt` в терминале)
  grunt.registerTask('default', ['concat', 'autoprefixer', 'uglify', 'csso']);
};