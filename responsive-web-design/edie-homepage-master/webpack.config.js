const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  watch: false,
  mode: 'development',
  devtool: false,
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
  },

  entry: {
    index: path.resolve(__dirname, 'src', 'index.ts'),
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]-[contenthash].js',
    assetModuleFilename: 'assets/img/[hash][ext][query]',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@img': path.resolve(__dirname, 'src', 'assets', 'img'),
      '@scss': path.resolve(__dirname, 'src', 'scss'),
      '@app': path.resolve(__dirname, 'src', 'ts', 'app.ts'),
      '@elementos': path.resolve(__dirname, 'src', 'ts', '01.elementos'),
    },
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.ejs$/i,
        use: [
          'html-loader',
          {
            loader: 'template-ejs-loader',
            options: {
              data: {
                navegacion: require('./src/data/navegacion.json'),
                redes_sociales: require('./src/data/redes-sociales.json'),
                conocimientos: require('./src/data/conocimiento.json'),
                especialidades: require('./src/data/especialidades.json'),
              },
            },
          },
        ],
      },
      {
        type: 'asset',
        test: /\.(jpe?g|png|gif|svg|webp|ico)$/i,
      },
    ],
  },

  plugins: [
    new WebpackManifestPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      minify: false,
      scriptLoading: 'blocking',
      title: 'My App',
      filename: 'index.html',
      template: 'src/vistas/index.ejs',
      chunks: ['index'],
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[contenthash].css',
    }),
  ],
};
