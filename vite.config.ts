import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./Source', import.meta.url))
    }
  },
  server: {
    host: "0.0.0.0",
    port: "5176",
  },
  build: {
    outDir: "Dist",
  },
  publicDir: "Public", 
})
