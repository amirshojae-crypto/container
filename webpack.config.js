const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const deps = require('./package.json').dependencies;

const path = require('path');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  console.log({ isProduction });
  return {
    entry: './src/index.ts',
    mode: process.env.NODE_ENV || 'development',
    output: {
      publicPath: '/',
    },
    devServer: {
      port: 3000,
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, "public")
      },
      hot: true
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        }
      ],
    },

    plugins: [
      new webpack.EnvironmentPlugin({ BUILD_DATE: Date.now().toString() }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env),
      }),
      new ModuleFederationPlugin({
        name: 'container',
        remotes: {
          orderbook: 'orderbook@http://localhost:3002/remoteEntry.js',
        },
        shared: {
          ...deps,
          react: { singleton: true, eager: true, requiredVersion: deps.react },
          'react-dom': {
            singleton: true,
            eager: true,
            requiredVersion: deps['react-dom'],
          },
        },
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
  };
};