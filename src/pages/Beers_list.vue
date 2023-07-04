<template>

  <v-container 
    fluid class="bg-yellow-lighten-1 scroll-y">
      <v-row id="scroll-target">        
        <form-add-beer/>
      </v-row>     
      <v-row class="py-5">
        <v-col 
          v-for="beer in beersStore.getAllBeers" 
          :key="beer.name"
          xs="12" 
          sm="6" 
          md="4" 
          lg="3">          
            <card-component
              :id="beer.id"
              :srcImage="beer.image_url"
              :titleBeer="beer.name"
              :first_brewed="beer.first_brewed"
              :description="beer.description"
            />          
        </v-col>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-btn 
          icon ="mdi mdi-arrow-up-bold-box-outline"
          size="x-large"
          class="mx-10 mb-10"
          color="info"
          @click="toTop"
         >
      </v-btn>
      </v-row>
  </v-container>
</template>

<script>
import CardComponent from "../components/CardComponent.vue";
import FormAddBeer from '../components/FormAddBeer.vue'
import { mapStores } from "pinia";
import {beersStore} from '../store/store.js'

export default {
  components: { CardComponent, FormAddBeer },
  data: () => {
    return {
     
    };
  },
  methods: {   
    toTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    },
    toBottom(){
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      })
    }
  },
  computed: {
    // note we are not passing an array, just one store after the other
    // each store will be accessible as its id + 'Store'
    ...mapStores(beersStore)
  },
  async mounted() {
    await this.beersStore.getBeers();
  },
  
};
</script>

