import babel from '@rollup/plugin-babel';
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
			file: './dist/index.js',
			format: 'umd',
			name: 'jonahsniderUtil',
			exports: 'named',
			sourcemap: true,
		},
		plugins: [typescript({incremental: true}), babel({babelHelpers: 'bundled', extensions: ['.ts']}), terser(terserConfig)],
	},
	// ES Modules
	{
		input: './src/index.ts',
		output: {
			file: './dist/index.mjs',
			format: 'esm',
			exports: 'named',
			sourcemap: true,
		},
		plugins: [typescript({incremental: true}), terser(esmTerserConfig)],
	},
];

export default config;
