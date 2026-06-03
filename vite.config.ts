import { defineConfig } from 'vite-plus';

export default defineConfig({
	staged: {
		'*': 'vp check --fix',
	},
	pack: {
		dts: {
			tsgo: true,
		},
		format: ['esm', 'cjs'],
		exports: true,
		sourcemap: true,
	},
	lint: {
		options: {
			typeAware: true,
			typeCheck: true,
		},
	},
	fmt: {
		useTabs: true,
		singleQuote: true,
		printWidth: 120,
		ignorePatterns: ['util.api.md'],
	},
	test: {
		isolate: false,
	},
});
