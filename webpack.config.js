var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      "./js/index"
    ],
    output: {
        path: path.join( __dirname,'/build'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['react-hot', 'babel-loader', 'babel'], exclude: /node_modules/ },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]

};
