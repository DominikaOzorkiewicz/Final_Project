const path = require("path");

module.exports = {
  entry: ["whatwg-fetch", `./src/js/app.js`],
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `src/build`)
  },
  mode: "development",
  watch: true,
  devServer: {
    contentBase: path.join(__dirname,`src`),
    publicPath: "/build/",
    compress: true,
    port: 3001,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },

      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },

      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            // Prefer `dart-sass`
            options: { implementation: require('sass'),
              sourceMap: true,
            },
          },
        ],
      },

    ]
  }
};
