var express = require('express')
var webpack = require('webpack')
var config = require('./webpack/dev.config')

if (!config.hotReloadPort) {
  throw 'You need to set `hotReloadPort` on your webpack config.'
}

var app = express()
var compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
}))

app.use(require('webpack-hot-middleware')(compiler))

app.listen(config.hotReloadPort, function(err) {
  if (err) {
    console.log(err)
    return
  }

  console.log('Hot Reload Server: listening on port', config.hotReloadPort)
})
