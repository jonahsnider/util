const path = require('path');

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	globals: {
		__DEV__: true,
	},
	roots: [path.join(__dirname, 'src')],
};
