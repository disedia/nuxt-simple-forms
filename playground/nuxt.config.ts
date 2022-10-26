// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-forms'
  ],
  tailwindcss: {
    configPath: '~/playground/tailwind.config.js' 
  },
  forms: {
    
  }
})
