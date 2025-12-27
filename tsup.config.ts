import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/index.ts', 'src/cli.ts'],
	format: ['esm'],       // Modern ESM only
	dts: true,             // Generate .d.ts files
	clean: true,           // Clean dist folder
	splitting: false,
	minify: true,          // Small file size
	sourcemap: true,
});