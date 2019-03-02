const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'app'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader'] }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.esm.js'
    }
  },
  devtool: 'source-map'
};