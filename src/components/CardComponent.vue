<template>
   <v-layout  
    class="my-5 py-5">
        
    <v-card 
      
      class="mx-auto my-5 rounded-lg text-center" 
      max-width="344" 
      elevation="10">
        <v-img 
        class="py-5" 
        :src="srcImage" 
        max-height="300"
        min-height="300"
        width="300px">
        
        <template v-slot:placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular
              color="grey-lighten-4"
              indeterminate
            ></v-progress-circular>
           </div>
        </template>
        </v-img>

      <v-card-title> {{ titleBeer }} </v-card-title>

      <v-card-subtitle> First brewed: {{ first_brewed }} </v-card-subtitle>

      <v-card-actions>
        
        <div class="text-center">
          <v-dialog 
            v-model="dialog" 
            width="800px">

              <template v-slot:activator="{ props }">
                <v-btn 
                  color="dark" 
                  v-bind="props" 
                  class="bg-light-blue-accent-3">
                    Description
                </v-btn>
              </template>
             

            <v-card>

              <v-card-text>
                {{ description }}
              </v-card-text>

              <v-card-actions>
                <v-btn 
                  color="dark" 
                  block @click="dialog = false"
                    >Close</v-btn
                >
              </v-card-actions>
              

            </v-card>
          </v-dialog>
        </div>
        
        <v-spacer></v-spacer>
        <v-item-group
        :id="id"
        >
          <v-btn icon="mdi mdi-delete" size="x-large" @click="select()"></v-btn>
        </v-item-group>
      </v-card-actions>

    </v-card>
 
</v-layout>
</template>

<script>
import "@mdi/font/css/materialdesignicons.css";
import { mapStores } from "pinia";
import { beersStore } from '../store/store.js'
export default {
  props: {
    id: {
      type: Number,
      default:'',
      required: true,
    },
    srcImage: {
      type: String,
      default: "",
      required: true,
    },
    titleBeer: {
      type: String,
      default: "",
      required: true,
    },
    first_brewed: {
      type: String,
      default: "",
      required: true,
    },
    description: {
      type: String,
      default: "",
      required: true,
    },
  },
  data: () => ({
    dialog: false,
  }),
  computed: {
    // note we are not passing an array, just one store after the other
    // each store will be accessible as its id + 'Store'
    ...mapStores(beersStore)},
  methods: {

  async select() {            
    console.log(this.id); 
    this.beersStore.deleteBeer(this.id)
   
    }
  }
};
</script>
