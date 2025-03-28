/* eslint-disable @typescript-eslint/no-require-imports */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CreateFileWebpack = require('create-file-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');

const config = {
  name: 'react-base-ts-webpack',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|avif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CreateFileWebpack({
      path: './build',
      fileName: 'CNAME',
      content: 'danncortes.com'
    }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public/404.html'), // Path to your 404.html
          to: path.resolve(__dirname, 'build/404.html') // Destination in the build folder
        }
      ]
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
      '...'
    ]
  },
  devServer: {
    historyApiFallback: true // This tells the dev server to always fallback to index.html
  }
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devServer = Object.assign({}, config.devServer, {
      static: {
        directory: path.join(__dirname, 'build')
      },
      compress: true,
      port: 3001
    });
    config.devtool = 'source-map';
    config.plugins.push(
      new BundleAnalyzerPlugin({ analyzerPort: 8899, openAnalyzer: false })
    );
    config.optimization.usedExports = true;
  }
  return config;
};
