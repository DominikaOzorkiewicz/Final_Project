const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const Html = require('html-webpack-plugin');
const Compression = require("compression-webpack-plugin");

module.exports = {
  entry: ["whatwg-fetch", `./src/js/app.js`],
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `public`)
  },
  mode: "development",
  watch: true,
  devtool: "source-map",

  devServer: {
    contentBase: path.join(__dirname,`src`),
    publicPath: "/build/",
    compress: true,
    port: 3001,
    historyApiFallback: true
  },
  plugins: [
    new Html({
      filename: "index.html",
      template: `./src/index.html`
    }),
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
    new Compression({
      threshold: 0,
      minRatio: 0.5
    })
  ],

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
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          //'style-loader',
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },

          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()]
            }
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

      {
        test: /\.(jpe?g|gif|png|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "/images/",
          outputPath: "/public/",
          useRelativePaths: true
        }
      },

      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: false,
            },
          },
        ],
      }

    ]
  }
};
