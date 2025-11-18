import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Base path HARUS diatur ke './' untuk GitHub Pages
  base: './', 
  plugins: [react()],
})
