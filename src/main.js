// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import VueMq from 'vue-mq'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Vuex from "vuex";
import theme from "./store/theme";

export default function (Vue, { appOptions, router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Fontawesome
  library.add(faSun, faMoon);
  Vue.component('vue-fontawesome', FontAwesomeIcon);

  // Use Buefy
  Vue.use(Buefy, {
    defaultIconComponent: 'vue-fontawesome',
    defaultIconPack: 'fas'
  })

  // Vue MQ
  Vue.use(VueMq, {
    breakpoints: {
      __: 320,
      xs: 575,
      sm: 767,
      md: 991,
      buefy: 1024,
      lg: 1367,
      xl: 1920,
      xxl: Infinity,
    },
    defaultBreakpoint: 'xl' // customized this for SSR
  })

  // Vuex
  Vue.use(Vuex);
  appOptions.store = new Vuex.Store({
    modules: {
      theme
    }
  });
}
