const base = require('@jonahsnider/xo-config');

const config = {...base};

config.rules['import/extensions'] = 'off';
config.rules['unicorn/no-array-callback-reference'] = 'off';
config.rules['unicorn/no-array-reduce'] = 'off';

module.exports = config;
