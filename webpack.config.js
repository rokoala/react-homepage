var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080','webpack/hot/only-dev-server');
    }

    return sources;
}

module.exports = {
    entry:getEntrySources([
      "./js/index"
    ]),
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
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title: 'Rodrigo Koga',
        template: 'template.html' // Load a custom template
      })
    ]
};
