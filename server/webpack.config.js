module.exports = {
  entry: './server.js',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  output: {
    filename: 'server.js',
    path: __dirname + '/dist'
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx", ".json", ".css"]
  },
  target: 'node'
};