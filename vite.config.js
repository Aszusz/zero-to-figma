import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  root: "src/ui",
  build: {
    outDir: "../../dist",
    emptyOutDir: false, // Don't empty the directory since esbuild put code.js there
    cssCodeSplit: false,
    assetsInlineLimit: 100000000,
    rollupOptions: {
      input: {
        ui: resolve(__dirname, "src/ui/index.html"),
      },
      output: {
        entryFileNames: "ui.js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
});
