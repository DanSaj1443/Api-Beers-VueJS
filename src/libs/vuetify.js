import '@mdi/js'
import 'vuetify/styles'
import 'font-awesome/css/font-awesome.min.css'
import { aliases, fa } from 'vuetify/iconsets/fa4'
import {createVuetify} from "vuetify";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components'


import { VuetifyDateAdapter } from 'vuetify/labs/date/adapters/vuetify'

const vuetify = createVuetify({
  components:{
    ...components,
    ...labsComponents,
  },
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