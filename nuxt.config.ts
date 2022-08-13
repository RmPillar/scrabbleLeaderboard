import { defineNuxtConfig } from "nuxt";
import VueTypeImports from "vite-plugin-vue-type-imports";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://api.fontshare.com/v2/css?f[]=pally@400,700,500&display=swap",
        },
      ],
    },
  },
  publicRuntimeConfig: {
    FIRESTORE_API_KEY: process.env.FIRESTORE_API_KEY,
  },
  css: ["@/styles.css"],
  postcss: {
    plugins: {
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  experimental: {
    reactivityTransform: true,
  },
  vite: {
    plugins: [VueTypeImports()],
  },
  plugins: ["~/plugins/validation-rules.ts"],
  modules: ["@pinia/nuxt"],
});
