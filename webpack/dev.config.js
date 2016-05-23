var webpack = require("webpack")
var extend = require("util")._extend
var baseConfig = require("./base.config.js")

var HOT_RELOAD_PORT = 7788
var HOT_RELOAD_URL = "http://localhost:" + HOT_RELOAD_PORT


var config = extend({}, baseConfig)

config.debug = true

// This is not a webpack config. We just need to pass it to dev-server.js so it knows on which port
// to listen.
config.hotReloadPort = HOT_RELOAD_PORT


// This injects a hot reloading client into an entry.
function hotReloadEntry(entryName) {
  var entry = config.entry[entryName]
  if (!entry) {
    throw "Entry " + entryName + " doesn't exist!"
  }
  entry = Array.isArray(entry) ? entry : [entry]
  config.entry[entryName] = entry.concat(
    "webpack-hot-middleware/client?noInfo=true&path=" + HOT_RELOAD_URL + "/__webpack_hmr"
  )
}

hotReloadEntry("index")

config.output.publicPath = HOT_RELOAD_URL + "/dist/"


// This option makes building the project fast while preserving the sourcemaps feature enabled.
// https://webpack.github.io/docs/configuration.html#devtool
config.devtool = "cheap-module-source-map"

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
)

module.exports = config
