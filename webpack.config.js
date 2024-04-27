const path = require('path');

module.exports = {
  entry: {
    mujer: './scripts/mujer.js',
    hombre: './scripts/hombre.js',
    niño: './scripts/niño.js',
    app: './scripts/app.js'
  }, // Este archivo tambíen sufrió una modificación, necesito que cree 4 bundles diferentes
  output: {
    filename: '[name].bundle.js', // ese [name] lo reemplaza con el nombre de entrada. por ej en el primero queda mujer.bundle.js
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply loader to all .js files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader', // Use babel-loader for transpiling
          options: {
            presets: ['@babel/preset-env'], // Use @babel/preset-env for compiling modern JavaScript syntax
          },
        },
      },
    ],
  },
  mode: 'development',
};