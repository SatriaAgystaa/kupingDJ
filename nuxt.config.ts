// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  css: ['~/assets/css/font.css', '~/assets/css/tailwind.css'],
  plugins: [
    '~/plugins/click-outside'
  ]
})