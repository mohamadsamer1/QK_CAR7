import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/QK_CAR_DONE/',
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
  },
})