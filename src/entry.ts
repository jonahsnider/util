// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, unicorn/prefer-module, @typescript-eslint/no-require-imports, n/prefer-global/process
module.exports = require(process.env.NODE_ENV === 'development' ? './index.dev.js' : './index.prod.js');
