export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  // router: {
  //   base: 'todo-list-vue'
  // },
  head: {
    title: 'todo-list-vue',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            // 'pink': '#EA40A4',
            // 'pink-shadow': '0px 0px 4px rgba(58, 130, 238, 0.75)',
            // 'blue': '#3A82EE',
            // 'blue-shadow': '0px 0px 4px rgba(234, 64, 164, 0.75)',
            'light': '#EEE',
            // 'red': '#ff5b57',
            'grey': '#888'
          },
          fontFamily: {
            montserrat: ['Montserrat', 'sans-serif']
          },
          screens: {
            'sm': '360px'
          }
        },
      }
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
