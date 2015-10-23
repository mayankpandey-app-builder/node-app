module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ngmin: {
            controllers: {
                src: ['js/controllers/*.js'],
                dest: 'dist/controllers.js'
            },
            directives: {
                src: ['js/directives/*.js', 'js/directives/**/*.js'],
                dest: 'dist/directives.js'
            },
            services: {
                src: ['js/services/*.js'],
                dest: 'dist/services.js'
            },
            filters: {
                src: ['js/filters/*.js'],
                dest: 'dist/filters.js'
            }
        },
        cachebreaker: {
            dev: {
                options: {
                    match: ['controllers.js', 'services.js', 'directives.js', 'filters.js']
                },
                files: {
                    src: ['index.html']
                }
            }
        },
        uglify : {
            js: {
                files: {
                    'dist/controllers.js' : [ 'dist/controllers.js' ],
                    'dist/directives.js' : [ 'dist/directives.js' ],
                    'dist/services.js' : [ 'dist/services.js' ],
                    'dist/filters.js' : [ 'dist/filters.js' ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-cache-breaker');
    grunt.loadNpmTasks('grunt-ngmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', ['ngmin', 'uglify', 'cachebreaker']);
};