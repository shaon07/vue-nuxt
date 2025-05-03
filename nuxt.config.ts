import tailwindcss from "@tailwindcss/vite";
import { resolve } from "pathe";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  alias: {
    "@components": resolve(__dirname, "components"),
    // You can add more aliases if needed
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@vesp/nuxt-fontawesome",
    "nuxt-aos",
  ],
  fontawesome: {
    component: "FontAwesomeIcon",
    icons: {
      brands: ["faFacebookF", "faInstagram", "faYoutube", "faLinkedinIn"],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
