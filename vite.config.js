import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/upload': {
        target: 'http://localhost:5000', // Backend server
        base: '/Gmrt_Relibility/',
        changeOrigin: true,
      },
    },
  },
});
