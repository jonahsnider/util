import { defineConfig } from 'vite-plus';

export default defineConfig({
	test: {
		globals: false,
		include: ['./src/**/*.test.ts'],
		coverage: {
			reporter: ['lcov', 'text-summary'],
			include: ['src/**/*.ts'],
			exclude: ['src/types/**/*.ts', 'src/**/*.test.ts'],
		},
	},
	fmt: {
		useTabs: true,
		singleQuote: true,
		printWidth: 120,
		// Match the prior Biome scope: format code only. Leaves Markdown/YAML
		// (incl. the api-extractor-generated util.api.md) untouched.
		ignorePatterns: ['**/*.md', '**/*.yml', '**/*.yaml'],
	},
	pack: {
		entry: ['src/index.ts'],
		format: ['esm', 'cjs'],
		dts: true,
		sourcemap: true,
	},
});
