var webpack = require('./node_modules/webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var helpers = require('./config/helpers')


module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/Vendor.ts',
        'main': './src/main.ts'
    },
    output: {
        publicPath: '/Build/Scripts',
        path:helpers.root('./Build/Scripts'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module:
    {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: { tsconfig: './tsconfig.json' }
                    }, 'angular2-template-loader'
                ]
            },
            {
                test: /\.css$/,
                loaders: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root('./Src'), // location of your src   
            {} // a map of your routes
        ),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /it|en/),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['main', 'vendor', 'polyfills']
        }),

       new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],

    devtool: 'source-map'
}
