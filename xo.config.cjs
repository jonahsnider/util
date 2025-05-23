/** @type {import('xo').FlatXoConfig} */
module.exports = [
	// Base configuration for all files
	{
		prettier: true,
		rules: {
			'prettier/prettier': 'off',
			quotes: [
				'error',
				'single',
				{
					avoidEscape: true,
					allowTemplateLiterals: true,
				},
			],
			'unicorn/prefer-json-parse-buffer': 'off',
			'import/extensions': 'off',
			'unicorn/no-array-callback-reference': 'off',
			'unicorn/no-array-reduce': 'off',
			// Will break typings if you aren't on a v16 version of @types/node
			'unicorn/prefer-node-protocol': 'off',
			// Required for API extractor compatibility
			'unicorn/prefer-export-from': 'off',
		},
	},
	// JavaScript files - JSDoc configuration
	{
		files: ['**/*.{js,cjs,mjs}'],
		plugins: {
			jsdoc: require('eslint-plugin-jsdoc'),
		},
		rules: {
			...require('eslint-plugin-jsdoc').configs.recommended.rules,
		},
	},
	// TypeScript files - TSDoc and naming conventions
	{
		files: ['**/*.{ts,tsx}'],
		plugins: {
			tsdoc: require('eslint-plugin-tsdoc'),
		},
		rules: {
			'default-case': 'off',
			'tsdoc/syntax': 'error',
			'@typescript-eslint/no-implicit-any-catch': 'off',
			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: 'variable',
					format: ['strictCamelCase', 'UPPER_CASE', 'StrictPascalCase'],
					leadingUnderscore: 'allow',
				},
				{
					selector: ['function', 'classProperty', 'objectLiteralProperty', 'parameterProperty', 'classMethod', 'objectLiteralMethod', 'typeMethod', 'accessor'],
					format: ['strictCamelCase', 'StrictPascalCase'],
					leadingUnderscore: 'allowSingleOrDouble',
					trailingUnderscore: 'allow',
					filter: {
						regex: '[- ]',
						match: false,
					},
				},
				{
					selector: ['typeLike', 'enumMember'],
					format: ['StrictPascalCase'],
				},
				{
					selector: 'variable',
					types: ['boolean'],
					format: ['StrictPascalCase'],
					prefix: ['is', 'was', 'has', 'can', 'should', 'will', 'did'],
				},
				{
					selector: 'interface',
					filter: '^(?!I)[A-Z]',
					format: ['StrictPascalCase'],
				},
				{
					selector: 'typeParameter',
					filter: '^T$|^[A-Z][a-zA-Z]+$',
					format: ['StrictPascalCase'],
				},
				{
					selector: ['classProperty', 'objectLiteralProperty'],
					format: null,
					modifiers: ['requiresQuotes'],
				},
			],
		},
	},
	// JSX/TSX files - React component rules
	{
		files: ['**/*.{jsx,tsx}'],
		rules: {
			'react/function-component-definition': [
				'error',
				{
					namedComponents: 'arrow-function',
					unnamedComponents: 'arrow-function',
				},
			],
		},
	},
];
