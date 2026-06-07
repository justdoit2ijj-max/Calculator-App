import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Calculator-App/',
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
