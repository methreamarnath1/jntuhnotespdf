import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure proper base URL
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        sw: 'service-worker.js', // Ensure the service worker is included in the build
      },
    },
    assetsDir: 'assets',
    outDir: 'dist',
  },
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  // Ensure proper handling of static assets
  publicDir: 'public',
});