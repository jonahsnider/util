import process from 'node:process';
import { codecovRollupPlugin } from '@codecov/rollup-plugin';
import babel from '@rollup/plugin-babel';
import terser, { type Options as TerserOptions } from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import type { RollupOptions } from 'rollup';

const { CODECOV_TOKEN } = process.env;

const terserConfig = {
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
	mangle: { toplevel: true },
	module: false,
	ie8: true,
} satisfies TerserOptions;

const esmTerserConfig = {
	...terserConfig,
	ecma: 2015,
	compress: {
		...terserConfig.compress,
		ecma: 2015,
	},
} satisfies TerserOptions;

const config: RollupOptions[] = [
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
		plugins: [
			typescript({ incremental: true }),
			babel({ babelHelpers: 'bundled', extensions: ['.ts'] }),
			terser(terserConfig),
			codecovRollupPlugin({
				enableBundleAnalysis: Boolean(CODECOV_TOKEN),
				bundleName: '@jonahsnider/util',
				uploadToken: CODECOV_TOKEN,
			}),
		],
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
		plugins: [
			typescript({ incremental: true }),
			terser(esmTerserConfig),
			codecovRollupPlugin({
				enableBundleAnalysis: Boolean(CODECOV_TOKEN),
				bundleName: '@jonahsnider/util',
				uploadToken: CODECOV_TOKEN,
			}),
		],
	},
];

export default config;
