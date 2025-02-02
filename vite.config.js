meimport { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/portfolio/",  // Usa el nombre de tu repositorio aquí
  plugins: [react()],
});