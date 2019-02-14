const gulp = require('gulp')
const pump = require('pump')
const babel = require('gulp-babel')

gulp.task('build', cb => {
	pump([
			gulp.src(['src/server/**/*.js', 'src/server/app.js']), // '**'指所有文件夹，'*'指所有文件
			babel({
				babelrc: false,
				'plugins': ['@babel/plugin-transform-modules-commonjs', ["@babel/plugin-proposal-decorators", {
					legacy: true
				}]]
			}),
			gulp.dest('dist')
		],
		cb
	)
})

gulp.task('watch', function () {
	gulp.watch(['src/server/**/*.js', 'src/server/app.js'], gulp.series(['build'])).on('change', () => {
		console.log('file is changed')
	})
})

const _task = ['build', 'watch']
gulp.task('default', gulp.series(_task))