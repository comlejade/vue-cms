const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: path.join(__dirname, './src/main.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
      {test: /\.(jpg|jpeg|png|gif|bmp)$/, use: 'url-loader?limit=2048&name=[name]-[hash:8].[ext]'},
      {test: /\.(eot|ttf|svg|woff|woff2)$/, use: 'url-loader'},
      {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},
      {test: /\.vue$/, use: 'vue-loader'}
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new VueLoaderPlugin()
  ],
  // resolve: {  //修改导入 vue 时，导入的包的默认路径
  //   alias: {
  //     'vue$': 'vue/dist/vue.js'
  //   }
  // }
}