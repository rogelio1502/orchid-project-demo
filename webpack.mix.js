let mix = require('laravel-mix')

mix.js('resources/js/app.js', 'public/js')
    .css('resources/css/app.css', 'public/css')
    .js('vendor/rogelio1502/ef-package/resources/js/app.js', 'public/js')
    .css(
        'vendor/rogelio1502/ef-package/resources/css/tom-select.default.css',
        'public/css'
    )
    .setPublicPath('public')
