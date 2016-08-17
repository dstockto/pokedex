var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
    {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }
  ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env' : {
        'NODE_ENV' : '"dev"'
      }
    }),
  ],
  devServer: {
    inline: true,
    historyApiFallback: true,
    contentBase: './'
  }
};
