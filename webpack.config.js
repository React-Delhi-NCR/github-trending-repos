module.exports = {
  entry: ['./index.js'],
  output: {
    filename: 'static/js/bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      // Process JS with Babel.
      {
        test   : /\.(js|jsx)$/,
        loader : 'babel-loader'
      },
    ]
  }
};
