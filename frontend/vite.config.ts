import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig(() => ({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },
  css: {
    modules: false as false | undefined,
    preprocessorOptions: {
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom'
  },
}));