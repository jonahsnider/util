/// <reference types="vitest" />

// Configure Vitest (https://vitest.dev/config/)

import { defineConfig } from 'vite';

export default defineConfig({
	test: {
		/* For example, use global to avoid globals imports (describe, test, expect): */
		globals: true,
		include: ['./src/**/*.test.ts'],
		coverage: {
			reporter: ['lcov', 'text-summary'],
			all: true,
			include: ['src/**/*.ts'],
			exclude: ['src/types/**/*.ts', 'src/**/*.test.ts'],
		},
	},
});
