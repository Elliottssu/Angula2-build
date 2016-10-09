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
	var server = plugins.livereload();
	gulp.task('watch:api', function() {
		// Watch Style files
		return gulp.watch('api/**/*', ['syncAssets'])
				.on('change', function(file) {
					server.changed(file.path);
				}).on('error',handleErrors);
	});

	gulp.task('watch:assets', function() {
		// Watch assets
		return gulp.watch('assets/**/*', ['syncAssets'])
				.on('change', function(file) {
					server.changed(file.path);
				}).on('error',handleErrors);
	});

};
