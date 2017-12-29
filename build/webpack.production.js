const webpack       = require("webpack");
const commonConfig  = require("./webpack.common.js");

const config = {
    ...commonConfig,
    ...{
        plugins: [
            ...commonConfig.plugins,
            new webpack.optimize.UglifyJsPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
        ],
    }
};

module.exports = config;