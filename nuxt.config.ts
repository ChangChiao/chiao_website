// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: ["~/assets/style/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['nuxt-icon'],
  app: {
    head: {
      title: 'Joe Chang website',
      link: [
        {
          rel:"stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Monda&family=Noto+Sans+TC:wght@400;700&display=swap",
          as: "font",
        },
        {
          href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined',
          rel: 'stylesheet',
        },
        { rel: 'icon', type: 'image/x-icon', href: '/J.ico' }
      ],
    },
  },
});
