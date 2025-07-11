
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      'react-native-svg': 'react-native-svg-web'
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  server: {
    hmr: true,
    allowedHosts: ['5173-morfosdev-flaxmarket-x08mg600rsr.ws-us120.gitpod.io'],
    watch: {
      usePolling: true,
    },
  },
  build: {
    outDir: 'web-build', // <- nova pasta de saída
  },
});
