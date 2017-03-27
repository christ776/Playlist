const webpack = require('webpack');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const sourcePath = path.join(__dirname, 'src');
const build = path.join(__dirname, 'dist');

module.exports = function (env) {
  const nodeEnv = env && env.prod ? 'production' : 'development';
  const isProd = nodeEnv === 'production';

  const plugins = [

    new webpack.EnvironmentPlugin({
      NODE_ENV: nodeEnv,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
          inject: 'body',
          filename: './public/index.html'
        }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
  ];

  return {
    devtool: 'eval',
		context: path.resolve(__dirname, './src'),
		entry:
    {
      'app': [
         'babel-polyfill',
            'react-hot-loader/patch',
            './index.js'
          ]
 	 },
   output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js",
    publicPath: '/'
  },
    module: {
      loaders: [
        {
          test: /\.html$/,
          exclude: /node_modules/,
          use: {
            loader: 'file-loader',
            query: {
              name: '[name].[ext]'
            },
          },
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
			{
					test: /\.(sass|scss)$/,
					use: [
							'style-loader',
							'css-loader',
							'sass-loader',
						]
					},
          {
        		test: /\.(js|jsx)$/,
            include: path.join(__dirname, 'src'),
        	  exclude: /(node_modules|bower_components)/,
            loaders: ['babel-loader']
        }
      ],
    },

    plugins,

    performance: isProd && {
      maxAssetSize: 100,
      maxEntrypointSize: 300,
      hints: 'warning',
    },

    stats: {
      colors: {
        green: '\u001b[32m',
      }
    },

    devServer: {
			contentBase:path.join(__dirname, 'public'),
			overlay: true,
      port: 3000,
      inline: true,
      hot: true,
    }
  };
};
