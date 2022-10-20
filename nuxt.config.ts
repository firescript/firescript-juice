// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
        '@pinia/nuxt',
    ],
    googleFonts: {
        families: {
            Inter: [400, 600],
        }
    },
    tailwindcss: {}
})
