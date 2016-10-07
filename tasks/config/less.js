/**
 * Compiles LESS files into CSS.
 *
 * ---------------------------------------------------------------
 *
 * Only the `assets/styles/importer.less` is compiled.
 * This allows you to control the ordering yourself, i.e. import your
 * dependencies, mixins, variables, resets, etc. before other stylesheets)
 *
 */
var handleErrors = require('../util/handleErrors');
module.exports = function(gulp, plugins, growl) {

	gulp.task('less:dev', function() {
		return gulp.src('assets/less/app.less')
				.pipe(
					plugins.less({
						expand: true,
						ext: '.css'
					})
				).on('error',handleErrors)
				.pipe(gulp.dest('.tmp/public/css/'))
				.pipe(plugins.if(growl, plugins.notify({ message: 'less dev task complete' })));
	});
};
