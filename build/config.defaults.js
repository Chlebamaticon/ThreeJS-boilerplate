const path = require("path");

module.exports =  {
    PORT: 4200,
    ROOT_DIR: (paths = '') => path.resolve(__dirname, '../' + paths)
};