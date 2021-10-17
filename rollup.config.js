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
	ecma: 2015,
	compress: {
		...terserConfig.compress,
		ecma: 2015,
	},
};

const config = [
	// UMD
	{
		input: './src/index.ts',
		output: {
			file: './dist/index.prod.js',
			format: 'umd',
			name: 'jonahsniderUtil',
			exports: 'named',
			sourcemap: true,
		},
		plugins: [
			typescript({incremental: true}),
			replace({preventAssignment: true, __DEV__: false}),
			babel({babelHelpers: 'bundled', extensions: ['.ts']}),
			terser(terserConfig),
		],
	},
	{
		input: './src/index.ts',
		output: {
			file: './dist/index.dev.js',
			format: 'umd',
			name: 'jonahsniderUtil',
			exports: 'named',
			sourcemap: true,
		},
		plugins: [
			typescript({incremental: true}),
			replace({preventAssignment: true, __DEV__: true}),
			babel({babelHelpers: 'bundled', extensions: ['.ts']}),
			terser(terserConfig),
		],
	},
	// ES Modules
	{
		input: './src/index.ts',
		output: {
			file: './dist/index.prod.mjs',
			format: 'esm',
			exports: 'named',
			sourcemap: true,
		},
		plugins: [typescript({incremental: true}), replace({preventAssignment: true, __DEV__: false}), terser(esmTerserConfig)],
	},
	{
		input: './src/index.ts',
		output: {
			file: './dist/index.dev.mjs',
			format: 'esm',
			exports: 'named',
			sourcemap: true,
		},
		plugins: [typescript({incremental: true}), replace({preventAssignment: true, __DEV__: true}), terser(esmTerserConfig)],
	},
	// Entry
	{
		input: './src/entry.ts',
		output: {
			file: 'dist/index.js',
			format: 'cjs',
			sourcemap: true,
		},
		plugins: [typescript({incremental: true}), babel({babelHelpers: 'bundled', extensions: ['.ts']}), terser(terserConfig)],
	},
];

export default config;
