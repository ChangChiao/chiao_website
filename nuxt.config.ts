// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
      link: [
        {
          rel:"stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&family=Noto+Serif+TC&display=swap",
          as: "font",
        },
        {
          href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined',
          rel: 'stylesheet',
        },
      ],
    },
  },
});
