// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-07-04",
  srcDir: "./src",
  dir: {
    public: "../public",
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxt/image",
  ],
  tailwindcss: {
    editorSupport: true,
    configPath: "./tailwind.config.ts",
  },
  googleFonts: {
    families: {
      "Noto Sans Thai": "100..900",
    },
  },
});
