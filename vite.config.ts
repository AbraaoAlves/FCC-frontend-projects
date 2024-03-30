///<reference types="vitest"/>

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const BASE = process.env.BASE_URL?? '/'; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: BASE,
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/setup.ts"],
    include: ["src/**/*.test.{ts,js,tsx,jsx}"],
    typecheck: {
      enabled: false
    },
  }  
});
