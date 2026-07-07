import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// viteSingleFile embebe JS y CSS dentro de un único index.html, así el build
// (dist/index.html) se puede abrir directamente como archivo (file://) sin
// servidor y sin errores de CORS — demo 100% offline.
// Respetar el puerto que asigne el entorno (PORT); si no, dejar que Vite elija.
const envPort = process.env.PORT ? Number(process.env.PORT) : undefined

export default defineConfig({
  base: './',
  plugins: [react(), viteSingleFile()],
  // Evitar dobles instancias de React al pre-bundlear dependencias.
  resolve: { dedupe: ['react', 'react-dom'] },
  optimizeDeps: { include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'] },
  server: {
    host: true,
    port: envPort,
    strictPort: !!envPort,
  },
})
