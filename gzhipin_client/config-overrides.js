const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const theme = require("./them.json");
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: true,
  }),
  addLessLoader({
    modifyVars: theme
  })
);