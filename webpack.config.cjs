const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const path = require('path');
const manifest = require('./manifest.cjs');

module.exports = {
  target: 'web',
  entry: {
    contentScript: './src/app/content/index.ts',
    background: './src/app/background/index.ts',
    popup: './src/app/popup/PopupIndex.tsx',
    options: './src/app/options/OptionsIndex.tsx',
    sidePanel: './src/app/side-panel/SidePanelIndex.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/app/popup/popup.html',
      filename: 'popup.html',
      chunks: ['popup', 'contentScript', 'background'],
    }),
    new HtmlWebpackPlugin({
      template: './src/app/options/options.html',
      filename: 'options.html',
      chunks: ['options', 'contentScript', 'background'],
    }),
    new HtmlWebpackPlugin({
      template: './src/app/side-panel/side-panel.html',
      filename: 'side-panel.html',
      chunks: ['sidePanel', 'contentScript', 'background'],
    }),
    new GenerateJsonPlugin('manifest.json', manifest),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve('./src/global.css'),
          to: path.resolve('dist'),
        },
      ],
    }),
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
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
  },
};
