// vite.config.js
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  root: "./client",
  build: {
    outDir: "../dist"
  },
  plugins: [
    svelte({
      /* plugin options */
    })
  ]
});
