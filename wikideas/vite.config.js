import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/wikideas/wikideas/' // Agrega esta línea para especificar el directorio base
})
