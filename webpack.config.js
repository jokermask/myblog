const webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var path = require('path') ;

module.exports = {
  entry: {
    index:'./src/js/index.js',
    main:'./src/js/main.js'
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  resolve: {
    extensions: [ '*','.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader"
      }
    ]
  },

  plugins: [
    //new webpack.optimize.UglifyJsPlugin({
    //  compress: {
    //    warnings: false,
    //  },
    //  output: {
    //    comments: false,
    //  },
    //}),//压缩和丑化

    new webpack.ProvidePlugin({
      $: 'jquery'
    }),//直接定义第三方库

    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      minChunks: 2
    })

  ]
};