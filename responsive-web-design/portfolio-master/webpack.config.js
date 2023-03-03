const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');
const webpack = require("webpack");
const path = require('path');


module.exports = {

    watch:false,
    devtool:false,
    mode:"development",
    devServer:{
        port:3000,
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress:true
    },
    
    entry: {
        app:  path.resolve(__dirname,"src/index.ts"),
    },
    
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-[contenthash].js',
    },

    resolve:{
        alias:{
            carpeta_css_index: path.resolve(__dirname,"src/scss/main.scss"),
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
                        presets: ['@babel/preset-env']
                    }
                } 
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options:{
                            publicPath:"./"
                        }
                    },
                    {
                     loader: "css-loader",
                    	options:{
                    	    url:false
                    	}
                    },
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.ejs$/i,
                use: [
                    {
                        loader:"html-loader",
                        options:{
                            sources:false
                        }
                    },
                    {
                        loader:'template-ejs-loader',
                        options:{
                            data:{
                                experiencias:require("./src/data/experiencias.json"),
                                hobbies:require("./src/data/hobbies.json"),
                                tecnologias:require("./src/data/tecnologia.json"),
                                proyectos:require("./src/data/proyectos.json")
                            }
                        }
                    } 
                ],
            },
            {
                test:/\.(jpe?g|png|gif|svg|webp|ico|pdf)$/i,
                use:[
                    {
                        loader:"file-loader",
                        options:{
                            name: "[name].[ext]",
                            outputPath: "assets/img"
                        }
                    }
                ]
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    optimization: {
        minimizer: [
          new CssMinimizerPlugin(),
        ],
    },
    
    plugins:[
        new WebpackManifestPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            minify:false,
            scriptLoading:'blocking',
            title: 'My App',
            filename: 'index.html',
            template: "src/index.ejs",
            chunks:["app"],
            hash:true
        }),
        new MiniCssExtractPlugin({
            filename:"css/[name]-[contenthash].css"
        }),
    ]
};