import { build, defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  preview: {},
  build: {
    rollupOptions: {
      external: ['~src/views/Customer.vue'],
    },
    outDir: 'dist',
  },
});
