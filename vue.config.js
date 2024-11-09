const path = require('path');

module.exports = {
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'src/assets'),
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      },
      extensions: ['.ts', '.js', '.vue', '.json']
    }
  }
};


