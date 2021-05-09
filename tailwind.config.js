module.exports = {
    darkMode: 'media',
    future: {
        removeDeprecatedGapUtilities: true
    },
    experimental: {
        uniformColorPalette: true,
        extendedFontSizeScale: true,
        applyComplexClasses: true
    },
    purge: {
        // needs to be set if we want to purge all unused
        // @tailwind/typography styles
        mode: 'all',
        content: ['./src/**/*.svelte', './src/**/*.html']
    },
    theme: {
        container: {
            center: true
        },
        extend: {
            spacing: {
                '116': '29rem'
            }
        }
    },
    variants: {},
    plugins: [require('@tailwindcss/typography')]
}