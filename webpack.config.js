// 进度条
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
// 百分比颜色
const chalk = require('chalk');

module.exports = {
  entry: "./src/main.js",
  output: {
    publicPath: "xuni",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ]
  },
  devServer: {
    contentBase: 'public',
    host:'0.0.0.0',
    port: 8080,
    //错误显示于页面
    overlay:true,
    hot:true,
    // 自动打开浏览器
    open: true,
    // 错误和警告不出现终端内
    quiet: true
  },
  devtool: 'inline-source-map',
  plugins: [
    new ProgressBarPlugin({
      format: '  build [:bar] ' + chalk.cyan.bold('  :percent') + chalk.red.bold('  :elapsed seconds'),
      clear: false,
      complete: '#'
    }),
  ]
};
