var webpack = require('webpack');
var path = require('path');
//var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3080',
    'webpack/hot/only-dev-server',
    './main.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader!babel-loader'
    }]
 },
resolve: {
    extensions: ['*', '.js', '.jsx']
  },
node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      dns: 'empty'
},
  output: {
    path: __dirname,
    publicPath: '/',
    filename: './bundle.js'
  },

  devServer: {
    contentBase: './',
    hot: true,

  },

 /*begin external
 target: 'node',
    externals: [nodeExternals()]
    //If you want to minify your files uncomment this
    // ,
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress: {
    //             warnings: false,
    //         },
    //         output: {
    //             comments: false,
    //         },
    //     }),
    // ]
//end external
},

    },
    {
        entry: 'index.js',
        output: {
            path: __dirname + '/bin',
            filename: 'app.bundle.js',
},*/

};
