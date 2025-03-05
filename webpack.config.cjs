const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const path = require('path');
const manifest = require('./manifest.cjs');

module.exports = {
  target: 'web',
  entry: {
    contentScript: './src/content/index.ts',
    background: './src/background/index.ts',
    popup: './src/popup/PopupIndex.tsx',
    options: './src/options/OptionsIndex.tsx',
    sidePanel: './src/side-panel/SidePanelIndex.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/popup/popup.html',
      filename: 'popup.html',
      chunks: ['popup', 'contentScript', 'background'],
    }),
    new HtmlWebpackPlugin({
      template: './src/options/options.html',
      filename: 'options.html',
      chunks: ['options', 'contentScript', 'background'],
    }),
    new HtmlWebpackPlugin({
      template: './src/side-panel/side-panel.html',
      filename: 'side-panel.html',
      chunks: ['sidePanel', 'contentScript', 'background'],
    }),
    new GenerateJsonPlugin('manifest.json', manifest),
  ],
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
  },
};
