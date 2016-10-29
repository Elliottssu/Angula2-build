/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 *
 */
var handleErrors = require('../util/handleErrors');
module.exports = function(gulp, plugins, growl) {
	var browserSync = require('browser-sync').create(); 
	 browserSync.init({
	    reloadDelay: 100,
	    proxy: "localhost:8888"   
	 })

	gulp.task('watch:angular2-typescript', function() {
		return gulp.watch('assets/app/**/*.ts', ['syncAssets:typescript'])
				.on('change', function(file) {
				}).on('error',handleErrors);
	});



	gulp.task('watch:angular2-less', function() {
		return gulp.watch('assets/app/**/*.less', ['syncAssets:less'])
				.on('change', function(file) {
				}).on('error',handleErrors);
	});


	gulp.task('watch:dev', function() {
		return gulp.watch(['assets/app/**/*.html','assets/less/**/*','assets/js/**/*','assets/fonts/**/*','assets/images/**/*'], ['syncAssets:dev'])
				.on('change',function(file){
					 browserSync.reload();
				}).on('error',handleErrors);
		
	});

	
};
