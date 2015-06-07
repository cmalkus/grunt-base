module.exports = function(grunt) {

// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'js/*.js',
				dest: 'js/<%= pkg.name %>.min.js'
			}
		},
		
		sass: {
			dist: {
				options: {
					style: 'copressed'
				},
				files: {
					'css/style.css': 'css/style.scss'
				}
			}
		},
		
		watch:{
			css: {
				files: 'css/*.scss',
				tasks: 'sass'
			},
			
			scripts:{
				files: 'js/*.js',
				tasks: 'uglify'
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['uglify, sass']);

};