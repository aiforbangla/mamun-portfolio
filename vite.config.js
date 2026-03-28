import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: Change 'mamun-portfolio' to your actual GitHub repo name
// If using a custom domain, change to '/'
export default defineConfig({
  plugins: [react()],
  base: '/mamun-portfolio/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
