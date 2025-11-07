import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		/* For example, use global to avoid globals imports (describe, test, expect): */
		globals: true,
		include: ['./src/**/*.test.ts'],
		coverage: {
			reporter: ['lcov', 'text-summary'],
			include: ['src/**/*.ts'],
			exclude: ['src/types/**/*.ts', 'src/**/*.test.ts'],
		},
	},
});
