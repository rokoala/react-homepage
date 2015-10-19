var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      "./js/index"
    ],
    output: {
        path: process.env.NODE_ENV === 'production' ? path.join( __dirname,'/dist') : path.join( __dirname,'/build'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]

};
