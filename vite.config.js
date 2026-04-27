import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html'),
        signup: resolve(__dirname, 'signup.html'),
        catalog: resolve(__dirname, 'catalog.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        admin: resolve(__dirname, 'admin.html'),
        instructor: resolve(__dirname, 'instructor.html'),
        // Add any other .html files you have here
      },
    },
  },
})