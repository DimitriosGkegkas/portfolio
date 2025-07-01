import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pages from 'vite-plugin-pages'
import sitemap from 'vite-plugin-sitemap'
import { resolve } from 'path'
import glsl from 'vite-plugin-glsl' // Add GLSL plugin

const server =
    process.env.APP_ENV === 'sandbox' ? { hmr: { clientPort: 443 } } : {}

// https://vitejs.dev/config/
export default defineConfig({
    server: server,
    resolve: {
        alias: {
            '@src': resolve(__dirname, './src'),
        },
    },
    plugins: [react(), glsl(), pages()], // Add GLSL plugin here
})
