import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svrg from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svrg()],
});
