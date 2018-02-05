const path = require("path");

const ROOT_DIR = (paths = "") => path.resolve(__dirname, "../" + paths);

module.exports =  {
    PORT: 4200,
    ROOT_DIR
};