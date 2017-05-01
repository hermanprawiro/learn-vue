var webpack = require('webpack');

module.exports = {
  entry: './app/index.js',
  devtool: 'source-map',
  output: {
    filename: './dist/bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: '.',
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  resolve: {
    alias: {vue: 'vue/dist/vue.js'}
  },
};
