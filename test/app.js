var express = require ('express');
var proxy = require ('http-proxy-middleware');

// proxy middleware options
var options = {
  target: 'http://jfdev.gf.com.cn', // target host
  changeOrigin: true, // needed for virtual hosted sites
  pathRewrite: {
    '^/v1/api': '/api',
  },
  //   ws: true, // proxy websockets
  //   pathRewrite: {
  //     '^/api/old-path': '/api/new-path', // rewrite path
  //     '^/api/remove/path': '/path', // remove base path
  //   },
  //   router: {
  //     // when request.headers.host == 'dev.localhost:3000',
  //     // override target 'http://www.example.org' to 'http://localhost:8000'
  //     'dev.localhost:3000': 'http://localhost:8000',
  //   },
};

// create the proxy (without context)
// mount `exampleProxy` in web server
var app = express ();
app.use (proxy ('/v1/api', options));
app.listen (3000);
