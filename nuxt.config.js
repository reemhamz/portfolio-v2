export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Reem Hamoui',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Reem is a frontend developer based in Toronto, and she loves web development intermixed with UX/UI design!',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/sunflower.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200&family=Niramit:wght@200;300;400,600&display=swap&family=Assistant:wght@200;300,400,500;600&display=swap&family=DM+Sans:wght@400;500;700&display=swap',
      },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://reemify.dev',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/setup.css', '@/assets/global.css', '~/assets/scss/_app.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // Scrolling package
    'vue-scrollto/nuxt',
  ],

  //style resources object... add your variables/mixins/function files in here, so they would be globally imported to every component!!
  styleResources: {
    scss: ['~/assets/scss/_app.scss'],
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
