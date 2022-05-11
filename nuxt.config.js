import router from "./contants/router";

export default {
  publicRuntimeConfig: {
    ADMIN_PACKAGE_URL: "https://admin.giaohangtietkiem.vn/admin?alias=",
    GS_URL: "https://gs.giaohangtietkiem.vn/",
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "GHTK - Dịch vụ giao hàng trong ngày chuyên nghiệp",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["ant-design-vue/dist/antd.css", "@/assets/css/global.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/leaflet.js", ssr: false },
    { src: "@/plugins/click-outside.js", ssr: false },
    { src: "@/plugins/aos", ssr: false },
    { src: "@/plugins/preload", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
  ],

  image: {
    presets: {
      defaultImage: {
        modifiers: {
          format: "webp",
          loading: "lazy",
          quality: "100",
        },
      },
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/sitemap", "@nuxtjs/google-analytics"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: false,
    friendlyErrors: false,
    babel: {
      test: /\.js$/,
      // exclude: [/node_modules/],
    },
    extend(config, { isClient }) {
      config.module.rules.push({
        test: /\.(lock|md|ico?)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      });

      if (isClient) {
        config.optimization.splitChunks.maxSize = 200000;
      }
    },
  },

  router: {
    extendRoutes(routes, resolve) {
      return router.map((r) => ({
        name: r.name,
        path: r.path,
        component: resolve(__dirname, r.pathComponent),
      }));
    },
  },

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID || "G-9C12RL6VTL",
  },

  sitemap: {
    hostname: process.env.NUXT_ENV_BASE_URL || "https://giaohangtietkiem.vn",
    gzip: true,
    routes: [],
  },

  watchers: {
    webpack: {
      ignored: /(node_modules|dist|.git|.nuxt)/,
    },
  },
};
