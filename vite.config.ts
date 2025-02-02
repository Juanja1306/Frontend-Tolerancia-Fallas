import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://34.133.223.226:8000',
        changeOrigin: true,
        secure: false, // Si el servidor tiene un certificado SSL autofirmado
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
