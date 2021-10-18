const base = require('@jonahsnider/xo-config');

const config = {...base};

config.rules['import/extensions'] = 'off';
config.rules['unicorn/no-array-callback-reference'] = 'off';
config.rules['unicorn/no-array-reduce'] = 'off';
// Will break typings if you aren't on a v16 version of @types/node
config.rules['unicorn/prefer-node-protocol'] = 'off';

module.exports = config;
