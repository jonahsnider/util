import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import {terser} from 'rollup-plugin-terser';

/** @type {import('rollup-plugin-terser').Options} */
const terserConfig = {
	/* eslint-disable camelcase */
	ecma: 5,
	compress: {
		arrows: false,
		arguments: true,
		booleans_as_integers: false,
		ecma: 5,
		keep_fargs: false,
		toplevel: true,
		passes: 10,
		unsafe: true,
	},
	mangle: {toplevel: true},
	module: false,
	ie8: true,
	/* eslint-enable camelcase */
};

/** @type {import('rollup-plugin-terser').Options} */
const esmTerserConfig = {
	...terserConfig,
	ecma: 2016,
	compress: {
		...terserConfig.compress,
		ecma: 2016,
	},
};

const config = [
	// UMD
	{
		input: './src/index.ts',
		output: [
			{
				file: './dist/index.prod.js',
				format: 'umd',
				name: 'jonahsniderUtil',
				plugins: [replace({__DEV__: false})],
				exports: 'named',
				sourcemap: true,
			},
			{
				file: './dist/index.dev.js',
				format: 'umd',
				name: 'jonahsniderUtil',
				plugins: [replace({__DEV__: true})],
				exports: 'named',
				sourcemap: true,
			},
		],
		plugins: [typescript({tsconfig: './tsconfig.json'}), babel({babelHelpers: 'bundled', extensions: ['.ts']}), terser(terserConfig)],
	},
	// ES Modules
	{
		input: './src/index.ts',
		output: [
			{
				file: './dist/index.prod.mjs',
				format: 'esm',
				plugins: [replace({__DEV__: false})],
				exports: 'named',
				sourcemap: true,
			},
			{
				file: './dist/index.dev.mjs',
				format: 'esm',
				plugins: [replace({__DEV__: true})],
				exports: 'named',
				sourcemap: true,
			},
		],
		plugins: [typescript({tsconfig: './tsconfig.json'}), terser(esmTerserConfig)],
	},
	// Entry
	{
		input: './src/entry.ts',
		output: {
			file: 'dist/index.js',
			format: 'cjs',
			sourcemap: true,
		},
		plugins: [typescript({tsconfig: './tsconfig.json'}), babel({babelHelpers: 'bundled', extensions: ['.ts']}), terser(terserConfig)],
	},
];

export default config;
