var handleErrors = require('../util/handleErrors');
var tscConfig = require('../../tsconfig.json');
module.exports = function(gulp, plugins, growl) {
	gulp.task('typescript:dev', function() {
		return gulp
			.src(['./assets/app/**/*.ts'])
			.pipe(plugins.typescript(tscConfig.compilerOptions)).on('error',handleErrors)
			.pipe(gulp.dest('./assets/js/angular2'));
	});
};
