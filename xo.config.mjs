// @ts-check
import base from '@jonahsnider/xo-config';

/** @type {import('xo').FlatXoConfig} */
const config= [
	...(Array.isArray(base) ? base : [base]),
	{
		rules: {
			'unicorn/no-array-callback-reference': 'off',
			'unicorn/no-array-reduce': 'off',
			// Will break typings if you aren't on a v16 version of @types/node
			'unicorn/prefer-node-protocol': 'off',
			// Required for API extractor compatibility
			'unicorn/prefer-export-from': 'off',
		},
	},
];

export default config;
