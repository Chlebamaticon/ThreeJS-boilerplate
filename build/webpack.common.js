const webpack               = require("webpack");
const CleanWebpackPlugin    = require("clean-webpack-plugin");
const defaults              = require("./config.defaults");

const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const rootDir = defaults.ROOT_DIR;

const config = {
    entry: {
        app: rootDir('src/app.ts'),
        vendor: rootDir('src/vendor.ts')
    },
    output: {
        filename: '[name].js',
        path: rootDir('dist')
    },
    module: {
        rules: [
            { test: /\.ts$/,  use: 'ts-loader' },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            }
        ],
    },
    plugins: [
        new CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.[hash].js'
        }),
        new CleanWebpackPlugin(['dist/*'],{
            root: rootDir(),
            verbose: true,
            dry: false
        })
    ]
};

module.exports = config;