import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    testTimeout: 20000,
    globals: true, // Permite usar 'expect' y otros sin importarlos manualmente
    environment: 'jsdom', // Entorno necesario para pruebas con React
    setupFiles: './setupTests.js', // Archivo de configuración para las pruebas
    css: true
  },
});
