import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      css: {
        additionalData: '@import "./src/assets/styles.css";'
      }
    }
  },
  server: {
    port: 3000
  }
});