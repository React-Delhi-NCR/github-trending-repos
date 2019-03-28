module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader'
      },
    ]
  }
};
