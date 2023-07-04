import '@mdi/js'
import 'vuetify/styles'
import 'font-awesome/css/font-awesome.min.css'
import { aliases, fa } from 'vuetify/iconsets/fa4'
import {createVuetify} from "vuetify";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { VuetifyDateAdapter } from 'vuetify/labs/date/adapters/vuetify'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
  date: {
    adapter: VuetifyDateAdapter,
  },
})

export default vuetify