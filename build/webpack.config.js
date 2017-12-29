const webpack       = require("webpack");
const development   = require("./webpack.development.js");
const production    = require("./webpack.production.js");

const isProduction = process.env.NODE_ENV === 'production';

const compiler = webpack(isProduction ? production : development);

compiler.run((err, stats) => {
   console.log(error);
});