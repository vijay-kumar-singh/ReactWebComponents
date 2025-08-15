import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'UserCardWebComponent',
      fileName: () => 'user-card.iife.js',
      formats: ['iife'],
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
    target: 'es2019',
    sourcemap: false,
    minify: 'esbuild',
    cssCodeSplit: false,
    treeshake: true,
  },
});
