import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  compatibilityDate: '2026-09-19',
  modules: ['@nuxt/ui'],
  css: [fileURLToPath(new URL('./app/assets/css/main.css', import.meta.url))],
  fonts: {
    families: [
      { name: 'Geist Variable', provider: 'none' },
      { name: 'Geist Mono Variable', provider: 'none' },
    ],
  },
})
