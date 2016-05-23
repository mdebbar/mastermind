var path = require("path")
var webpack = require("webpack")

var config = {}

// Used for resolving "entry" points only.
config.context = path.join(__dirname, "..", "src")

config.entry = {
  index: "index",
}

config.output = {
  filename: "[name].js",
  path: path.join(__dirname, "..", "build"),
}

config.module = {
  loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
    },
    {
      test: /\.css$/,
      loaders: ["style", "css"],
    },
    {
      test: /\.(png|jpg|gif)$/,
      loader: "url-loader?limit=8192",
    },
  ],
}

config.resolve = {
  extensions: ["", ".js"],
  modulesDirectories: [".", "node_modules"],
}

config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
]

module.exports = config
