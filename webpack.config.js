const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.jsx',
  },
  plugins: [
    new CopyPlugin(
      {
        patterns: [
          {
            from: './src/locales',
            to: '../dist/locales',
            toType: 'dir',
            force: true,
          },
        ],
      },
      { copyUnmodified: true }
    ),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node-modules/,
        use: 'babel-loader',
      },
      {
        test: /\.jsx$/,
        exclude: /node-modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(svg|png|jpeg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'assets/img',
          },
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/fonts',
        },
      },
    ],
  },
};
