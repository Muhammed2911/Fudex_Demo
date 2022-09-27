import path from "path";
import fs from "fs";

export default {
  target: "server",
  generate: {
    routes: ["/"],
  },
  head: {
    title: "mokayiefy-front",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // "~/assets/css/global.css",
    "~/assets/website/css/bootstrap2.css",
    "~/assets/website/css/rtl-b.css",
    "~/assets/website/css/jquery.rateyo.min.css",
    "~/assets/website/css/style.css",
    "~/assets/website/css/enStyle.css",
    "~/assets/css/style.css",
    "~/assets/vendors/font-awesome/css/all.min.css",
    "~/assets/vendors/slick/slick.min.css",
    "~/assets/vendors/slick/slick-theme.min.css",
    "~/assets/vendors/pretty-checkbox.min.css",
    "~/assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css",
  ],
  loading: "~/components/Spinner.vue",
  // loading: true,

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vee-validate" },
    { src: "~/plugins/i18n", ssr: false }, //** call first time in application */
    { src: "~/plugins/axios" },
    { src: "~/plugins/vue-slick", ssr: false },
    { src: "~/plugins/event-bus" },
    { src: "~plugins/vue-js-modal.js" },
    { src: "~plugins/bootstrap-vue.js" },
    { src: "~/plugins/vue2-google-maps.js" },
    {
      src: "~/plugins/star-rating.js",
      ssr: false,
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  components: {
    dirs: ["~/components/pages/homepage"],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/color-mode"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/toast",
    "@nuxt/image",
    "bootstrap-vue/nuxt",
    "vue-social-sharing/nuxt",
    "nuxt-vue-multiselect",
    "vue-social-sharing/nuxt",
    "cookie-universal-nuxt",
    "nuxt-vuex-localstorage",
    [
      "nuxt-i18n",
      {
        lazy: true,
        loadLanguagesAsync: true,
        // vueI18n: i18n,
        locales: [
          {
            name: "English",
            code: "en",
            iso: "en-US",
            file: "en/index.js",
            // dir: 'en/'
          },
          {
            name: "Arabic",
            code: "ar",
            iso: "ar-AR",
            file: "ar/index.js",
            // dir: 'ar/'
          },
        ],
        langDir: "locales/",
        defaultLocale: "en",
        fallbackLocale: "en",
        strategy: "prefix",
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: "i18n_redirected",
        },
        rootRedirect: "en",
      },
    ],
    "nuxt-vue-multiselect",

    "@nuxtjs/firebase",
  ],
  firebase: {
    config: {
      apiKey: "AIzaSyDsptHTRH45Y-btAGjfuRjQDssweHyMU3I",
      authDomain: "mukyfy-951e0.firebaseapp.com",
      projectId: "mukyfy-951e0",
      storageBucket: "mukyfy-951e0.appspot.com",
      messagingSenderId: "548835319766",
      appId: "1:548835319766:web:00670755cb06a515b00e77",
      measurementId: "G-HRTG9YRZM6",
    },
    services: {
      messaging: {
        createServiceWorker: true,
        fcmPublicVapidKey:
          "BPDoyCPNtyYg675rD1YHIE5_WLiidijXfeH_cOj2CfMbHzaIZJXgUbIoWKCS5mqP4HxDPsxEqGLJO3wGOMax2Aw",
      },
    },
  },
  serverMiddleware: {
    "/_ipx": "~/server/middleware/ipx.js",
  },
  // https://openbase.com/js/vue-toasted/documentation
  toast: {
    position: "top-center",
    duration: 3000,
    theme: "toasted-primary", // ['toasted-primary', 'outline', 'bubble']
    register: [
      // Register custom toasts
      {
        name: "my-error",
        message: "Oops...Something went wrong",
        options: {
          type: "error",
        },
      },
    ],
  },
  router: {
    middleware: "routerMiddleware",
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    babel: {
      compact: true,
    },
    extractCSS: true,
    optimizeCSS: true,
    // filenames: {
    //   css: `${BUILDID}.[name].css`,
    // },
  },
};
