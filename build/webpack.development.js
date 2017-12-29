const WebpackDashboard  = require("webpack-dashboard");
const commonConfig      = require("./webpack.common.js");
const defaults          = require("./config.defaults.js");

const config = {
    ...commonConfig,
    ...{
        devtool: 'inline-source-map',
        plugins: [
            ...commonConfig.plugins,
            new WebpackDashboard({
                port: 4201
            })
        ],
        devServer: {
            contentBase: defaults.ROOT_DIR("dist"),
            compress: true,
            port: process.env.NODE_PORT || defaults.PORT,
        }
    }
};

console.log(config);

module.exports = config;