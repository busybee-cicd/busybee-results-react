import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ command }) => ({
  base: '/busybee-results-react/',
  plugins: [react()],
  resolve: {
    alias: command === 'serve' ? {
      'busybee-results-react': path.resolve(import.meta.dirname, '../src/index.tsx')
    } : {},
    dedupe: ['react', 'react-dom']
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  },
  build: {
    outDir: 'build'
  }
}))
