import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './libs/router'
import vuetify from "./libs/vuetify.js";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import pinia from './libs/pinia.js'

/* add icons to the library */
library.add(faUserSecret)

createApp(App).use(router).use(vuetify).use(pinia).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

// .provide('axios', app.config.globalProperties.axios)