// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['nuxt-graphql-client', '@nuxtjs/tailwindcss', 'dayjs-nuxt'],
  runtimeConfig: {
    public: {
      // GQL_HOST: 'http://127.0.0.1:1234/graphql'
      GQL_HOST: 'http://admin.200205.net/graphql'

    }
  },
  css: [
    '@/assets/style.css',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  }
})