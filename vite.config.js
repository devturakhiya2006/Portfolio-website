import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [tailwindcss(), react()],
    base: '/',
    // If we are building for GitHub, use the subfolder, otherwise use root
   // base: mode === 'production' ? '/Portfolio-website/' : '/',
  }
})