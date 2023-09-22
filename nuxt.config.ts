// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/tailwindcss'],
  googleFonts: {
    families: {
      Antonio: [500],
      Spartan: [400, 700]
    }
  }
})
