import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', 
    },
  },
  build: {
    outDir: 'dist',  // Specify output directory for build artifacts
    rollupOptions: {
      input: 'index.html', // Entry point for your application
    }
  }
});
