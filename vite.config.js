import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD
 import tailwindcss from '@tailwindcss/vite'

=======
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
>>>>>>> 5ad9cbf (add Moke.json, cart, cartstore)
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
<<<<<<< HEAD
      tailwindcss()
=======
    tailwindcss(),
>>>>>>> 5ad9cbf (add Moke.json, cart, cartstore)
  ],
})
