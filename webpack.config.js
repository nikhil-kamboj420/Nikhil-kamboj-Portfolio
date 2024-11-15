const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: ['./main.js', './styles.scss'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './js')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000
  }
};