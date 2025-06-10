const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true, // limpia la carpeta dist antes de cada build
  },
  resolve: {
    extensions: ['.js', '.jsx'], // para que puedas importar sin extensión
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // transpila .js y .jsx
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/, // para Sass
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/, // SVG como componente React
        use: ['@svgr/webpack'] 
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // usa tu index.html
    }),
  ],
  devServer: {
    static: './dist',
    open: true,
    port: 3001,
    hot: true,
    historyApiFallback: true,
  },
  mode: 'development', // puedes cambiarlo a 'production' para producción
};