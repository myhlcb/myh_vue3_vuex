const path = require ('path');
function resolve (dir) {
  return path.join (__dirname, dir);
}

module.exports = {
  configureWebpack: config => {
    config.resolve = {
      extensions: ['.js', '.vue', '.json', '.css'],
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': resolve ('src'),
        view: resolve ('src/view'),
      },
    };
  },
  // baseUrl: process.env.VUE_APP_URL,
  publicPath: '/',
  devServer: {
    proxy: {
      '/v1': {
        target: 'http://localhost:3002/',
        changeOrigin: true,
      },
    },
  },
};
