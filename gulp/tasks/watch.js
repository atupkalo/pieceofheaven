'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./source/js/**/*.js', $.gulp.parallel('js:process'));
    $.gulp.watch('./source/style/**/*.scss', $.gulp.parallel('sass'));
    $.gulp.watch('./source/template/**/*.pug', $.gulp.parallel('pug'));
    $.gulp.watch('./source/images/**/*.*', $.gulp.parallel('copy:image'));
  });
};
