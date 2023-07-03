<template>

  <v-container 
    fluid class="bg-yellow-lighten-1">
      <v-row>
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
          <suspense>
            <template #default>
              <card-component
                  :id="beer.id"
                  :srcImage="beer.image_url"
                  :titleBeer="beer.name"
                  :first_brewed="beer.first_brewed"
                  :description="beer.description"
                />
              </template>

              <template #fallback>            
                  <app-loader/>              
              </template>
            </suspense>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import AppLoader from "../components/Apploader.vue";
import CardComponent from "../components/CardComponent.vue";
// import AxiosBeers from "../services/axios"
import FormAddBeer from '../components/FormAddBeer.vue'
import { mapStores } from "pinia";
import {beersStore} from '../store/store.js'

export default {
  components: { CardComponent, AppLoader, FormAddBeer },
  data: () => {
    return {
      // beers: [],
      error: null
    };
  },
  methods: {
    async getListBeers() {
      try {
        this.beers = await AxiosBeers.getBeers();
      } catch (error) {
        console.error(error);
      }
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

