import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  plugins: [react(), viteSingleFile(), tailwindcss()],
  root: 'src/ui',
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: '../../dist',
    emptyOutDir: false,
    cssCodeSplit: false,
    assetsInlineLimit: 100000000,
    rollupOptions: {
      input: {
        ui: resolve(__dirname, 'src/ui/index.html'),
      },
      output: {
        entryFileNames: 'ui.js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
