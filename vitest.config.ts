import { defineConfig } from 'vitest/config';

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
});
