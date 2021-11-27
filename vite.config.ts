import { resolve } from 'path'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import windiCSS from 'vite-plugin-windicss'
import { minify } from 'html-minifier'
import { defineConfig } from 'vite'

const indexReplace = () => {
    return {
        name: 'html-transform',
        transformIndexHtml(html) {
            return minify(html, {
                collapseWhitespace: true,
            })
        },
    }
}

export default defineConfig(({ command, mode }) => {
    const isProduction = mode === 'production'
    return {
        build: {
            polyfillDynamicImport: false,
            cssCodeSplit: false,
            minify: isProduction,
        },
        // root: 'src/',
        optimizeDeps: {
            exclude: ['@roxi/routify'],
        },
        resolve: {
            dedupe: ['@roxi/routify'],
            alias: {
                svelte: resolve(__dirname, 'node_modules/svelte'),
                '@': resolve(__dirname, './src'),
            },
        },
        plugins: [windiCSS(), svelte(), indexReplace()],
    }
})