//vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    plugins: [
        react(),
        tailwindcss(),
    ],
    theme: {
        extend: {},
    },
    server: {
        allowedHosts: [
            '.ngrok-free.app', // Cho phép tất cả subdomain của ngrok-free.app
            'localhost',
        ],
    },
})
