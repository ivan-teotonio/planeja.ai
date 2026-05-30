import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      {
        // only match imports starting with "@/" so scoped packages like
        // "@tailwindcss/..." are not affected
        find: /^@\/(.*)$/,
        replacement: path.resolve(__dirname, 'src') + '/$1',
      },
    ],
  },
})
