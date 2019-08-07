let config = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/docs',
        publicPath: '/',
        filename: 'bundle.js'
      },
      devServer: {
        contentBase: './docs'
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
    }
}

module.exports = config;