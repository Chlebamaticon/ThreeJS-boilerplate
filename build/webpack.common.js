const webpack               = require("webpack");
const CleanWebpackPlugin    = require("clean-webpack-plugin");
const HtmlWebpackPlugin     = require("html-webpack-plugin");
const CopyWebpackPlugin     = require("copy-webpack-plugin");
const defaults              = require("./config.defaults");

const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const ModuleConcatenationPlugin = webpack.optimize.ModuleConcatenationPlugin;
const rootDir = defaults.ROOT_DIR;

const config = {
    entry: {
        app: rootDir("src/app.ts"),
        vendor: rootDir("src/vendor.ts")
    },
    output: {
        filename: "[name].js",
        path: rootDir("dist")
    },

    resolve: {
        modules: [
            "node_modules",
            rootDir("assets")
        ],
        extensions: [".js", ".ts"],
        alias: {
            "@core": rootDir("src/core")
        }
    },

    module: {
        rules: [
            { test: /\.ts$/,  use: "ts-loader" },
            { test: /\.js$/,  use: "ts-loader", exclude: /node_modules/ },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ],
            }
        ],
    },
    plugins: [
        new CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.[hash].js",
            minChunks: module => module.context && module.context.indexOf("node_modules") !== -1
        }),
        new CleanWebpackPlugin(["dist/*"],{
            root: rootDir(),
            verbose: true,
            dry: false
        }),
        new CopyWebpackPlugin([{ from: rootDir("assets"), to: "assets" }]),
        new ModuleConcatenationPlugin(),
        new HtmlWebpackPlugin({
            template: rootDir("src/index.html")
        })
    ]
};

module.exports = config;