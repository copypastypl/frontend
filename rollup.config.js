import svelte from 'rollup-plugin-svelte-hot'
import Hmr from 'rollup-plugin-hot'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import { copySync, removeSync } from 'fs-extra'
import getConfig from '@roxi/routify/lib/utils/config'
import autoPreprocess from 'svelte-preprocess'

const { distDir } = getConfig()
const staticDir = 'static'
const buildDir = `${distDir}/build`
const isNollup = !!process.env.NOLLUP
const production = !process.env.ROLLUP_WATCH

removeSync(distDir)
removeSync(buildDir)

const copyToDist = () => ({
    writeBundle() {
        copySync(staticDir, distDir)
    }
})

export default {
    preserveEntrySignatures: false,
    input: [`src/main.js`],
    output: {
        sourcemap: true,
        format: 'esm',
        dir: buildDir,
        chunkFileNames: `[name]${(production && '-[hash]') || ''}.js`
    },
    plugins: [
        svelte({
            emitCss: false,
            hot: isNollup,
            preprocess: [
                autoPreprocess({
                    postcss: true
                })
            ]
        }),

        resolve({
            browser: true,
            dedupe: (importee) => !!importee.match(/svelte(\/|$)/)
        }),
        
        commonjs(),

        production && terser(),
        !production && isNollup && Hmr({ inMemory: true, public: staticDir }),
        {
            transform: (code) => ({
                code: code.replace(
                    /process\.env\.NODE_ENV/g,
                    `"${process.env.NODE_ENV}"`
                ),
                map: { mappings: '' }
            })
        },
        production && copyToDist()
    ]
}
