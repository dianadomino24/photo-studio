var gulp = require('gulp')
var svgSprite = require('gulp-svg-sprite'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace')

gulp.task('svgSprite', function () {
    return (
        gulp
            .src('sprite/*.svg')
            // minify svg
            .pipe(
                svgmin({
                    js2svg: {
                        pretty: true,
                    },
                })
            )
            // remove all fill and style declarations in out shapes
            .pipe(
                cheerio({
                    run: function ($) {
                        $('[fill]').removeAttr('fill')
                        $('[style]').removeAttr('style')
                    },
                    parserOptions: { xmlMode: true },
                })
            )
            // cheerio plugin create unnecessary string '>', so replace it.
            .pipe(replace('&gt;', '>'))
            // build svg sprite
            .pipe(
                svgSprite({
                    mode: {
                        symbol: true,
                    },
                    // preview: false,
                    // selector: "icon-%f",

                    // svg: {
                    //     symbols: 'symbol_sprite.html',
                    // },
                })
            )
            .pipe(gulp.dest('images/'))
    )
})
