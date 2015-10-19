var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var express = require('express');
var path = require('path');

var isProduction = process.env.NODE_ENV === 'production';
var port = 8080;

if (isProduction) {

  var app = express();
  // We point to our static assets
  app.use(express.static( path.join( __dirname,'/dist')));

  // And run the server
  app.listen(port, function () {
    console.log('Server running on port ' + port);
  });
}
else{

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(8080, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:8080');
});

}
