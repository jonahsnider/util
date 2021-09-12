module.exports = require(process.env.NODE_ENV === 'development' ? './index.dev.js' : './index.prod.js');
