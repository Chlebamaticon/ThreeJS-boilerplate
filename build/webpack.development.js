const WebpackDashboard  = require("webpack-dashboard/plugin");
const commonConfig      = require("./webpack.common.js");
const defaults          = require("./config.defaults.js");

const config = {
    ...commonConfig,
    ...{
        devtool: 'inline-source-map',
        plugins: [
            ...commonConfig.plugins,
            new WebpackDashboard({
                port: process.env.NODE_PORT || defaults.PORT
            })
        ],
        devServer: {
            contentBase: defaults.ROOT_DIR("dist"),
            compress: true,
            port: process.env.NODE_PORT || defaults.PORT,
        }
    }
};

module.exports = config;