const base = require('@jonahsnider/xo-config');

/** @type {import('xo').FlatXoConfig} */
module.exports = [
	// Base configuration from @jonahsnider/xo-config
	...base.default,
	// Add our custom rule overrides
	{
		rules: {
			'import/extensions': 'off',
			'unicorn/no-array-callback-reference': 'off',
			'unicorn/no-array-reduce': 'off',
			// Will break typings if you aren't on a v16 version of @types/node
			'unicorn/prefer-node-protocol': 'off',
			// Required for API extractor compatibility
			'unicorn/prefer-export-from': 'off',
		},
	},
];
