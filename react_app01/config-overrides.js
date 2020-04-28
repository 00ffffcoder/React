const { override, fixBabelImports} = require('customize-cra');//修改



module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
);
