// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-05-15",
    devtools: { enabled: true },
    app: {
        // pageTransition: { name: "fade", mode: "out-in" },
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
        },
    },

    css: ["bootstrap/dist/css/bootstrap.min.css", "~/assets/scss/main.scss"],
});
