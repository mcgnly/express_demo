const path = require('path')
const fs = require('fs')
module.exports = {
	entry: './app.js',
	output: {
		filename: 'serverBundle.js'
	},
  target: 'node',
  devtool: 'source-map',
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader'
      }
    }
  ]
}
}
