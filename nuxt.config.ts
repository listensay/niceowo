// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['nuxt-graphql-client', '@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      GQL_HOST: 'http://admin.200205.net/graphql' // overwritten by process.env.GQL_HOST
    }
  }
})