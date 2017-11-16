var path = require('path')
var webpack = require('webpack')
var ora = require('ora')
var rm = require('rimraf')

var config = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'util.min.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
}

var spinner = ora('building...')
spinner.start()

rm(path.join(__dirname, 'dist/*'), err => {
    if (err) throw err
    webpack(config, function () {
        spinner.stop()
        console.log('build complete.')
    })
})
