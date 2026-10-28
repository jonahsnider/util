import { defineConfig } from 'vite-plus';

export default defineConfig({
	staged: {
		'*': 'vp check --fix',
	},
	pack: {
		entry: ['src/index.ts'],
		dts: true,
		format: ['esm'],
		exports: true,
		sourcemap: true,
	},
	test: {
		globals: false,
		include: ['./src/**/*.test.ts'],
		isolate: false,
		coverage: {
			reporter: ['lcov', 'text-summary'],
			include: ['src/**/*.ts'],
			exclude: ['src/types/**/*.ts', 'src/**/*.test.ts'],
		},
	},
	fmt: {
		ignorePatterns: ['util.api.md', 'CHANGELOG.md'],
		printWidth: 120,
		singleQuote: true,
		useTabs: true,
	},
	lint: {
		categories: {
			correctness: 'error',
			perf: 'error',
		},
		jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
		overrides: [
			{
				files: ['**/*.test.ts'],
				rules: { 'typescript/unbound-method': 'off' },
			},
		],
		rules: { 'vite-plus/prefer-vite-plus-imports': 'error' },
		options: { typeAware: true, typeCheck: true },
	},
});
