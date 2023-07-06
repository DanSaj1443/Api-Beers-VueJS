<template>
   
          <v-sheet>
            <v-skeleton-loader
              class="mx-auto"
              elevation="22"
              height="100"
              width="100"
              type="image"
            ></v-skeleton-loader>
          </v-sheet>
   
        
          <v-sheet>
          <v-skeleton-loader
            :loading="true"
            class="mx-auto border"
            max-width="300"
            type="image, article"
          ></v-skeleton-loader>
          </v-sheet>
 
  
  </template>

  <script>
import * as labsComponents from 'vuetify/labs/components'
export default{
    components:{labsComponents},
data: () => {
    return {
        loading: true,
    
    }
}
}
</script>