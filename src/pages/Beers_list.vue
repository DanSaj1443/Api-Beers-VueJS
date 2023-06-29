<template>

  <v-container fluid class="bg-yellow-lighten-1">
    <v-row>
      <form-add-beer/>
    </v-row>    
    <v-row class="py-5">
      
      <v-col v-for="beer in beers" xs="12" sm="6" md="4" lg="3">
        <suspense>
          <template #default>
            <card-component
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
import AxiosBeers from "../services/axios"
import FormAddBeer from '../components/FormAddBeer.vue'
export default {
  components: { CardComponent, AppLoader, FormAddBeer },
  data: () => {
    return {
      beers: [],
      error: null
    };
  },
  methods: {
    async getListBeers() {
      try {
        let beersData = new AxiosBeers();
        this.beers = await beersData.getBeers();
      } catch (error) {
        console.error(error);
      }
    },

    async postBeerComponent() {
      await AxiosBeers.postBeer()
    }
  },

  
  async mounted() {
    await this.getListBeers();
  },


//   onErrorCaptured()
//   {
//     (e)=> {
//   error.value = e
//   return true
// }
//   }
};

</script>
<style></style>
