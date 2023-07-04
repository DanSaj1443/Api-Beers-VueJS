<template>
  <v-layout class="mx-auto my-5 rounded-lg justify-center">
    <v-dialog v-model="dialog" max-width="800px">
      <template v-slot:activator="{ props }">
        <v-btn color="#5865f2" flat v-bind="props">Add new beer</v-btn>
      </template>
      <!-- Modal Add beer -->
      <v-card class="text-center rounded-xl">
        <v-card-title>
          <h2 class="pt-6">Add a new beer</h2>
        </v-card-title>
        <v-card-text>
          <v-form >
            <v-container>
              <v-row>

                <!-- Field name -->
                <v-col cols="12" md="4">
                  <v-text-field
                    variant="outlined"
                    v-model="name"
                    label="Name"
                    :rules="fieldRulesGeneral"
                    required
                  ></v-text-field>
                </v-col>

                <!--Field tagline  -->
                <v-col cols="12" md="4">
                  <v-text-field
                    variant="outlined"
                    v-model="tagline"
                    label="Tagline"
                    required
                  ></v-text-field>
                </v-col>

                 <!--Field Date -->
                 <v-col cols="12" md="4">
                  <v-text-field
                    variant="outlined"
                    v-model="first_brewed"
                    label="MM/YYYY"
                    required
                  ></v-text-field>
                </v-col>               
              </v-row>

              <v-row>
                <!-- Field food_pairing -->
                <v-col cols="12" md="4">
                  <v-text-field
                    variant="outlined"
                    v-model="food_pairing"
                    label="food_pairingTrois"
                    required
                  ></v-text-field>
                </v-col>

                <!--Field food_pairingDeux  -->
                <v-col cols="12" md="4">
                  <v-text-field
                    variant="outlined"
                    v-model="food_pairingDeux"
                    label="food_pairingTrois"
                    required
                  ></v-text-field>
                </v-col>

                 <!--Field food_pairingTrois -->
                 <v-col cols="12" md="4">
                  <v-text-field
                    variant="outlined"
                    v-model="food_pairingTrois"
                    label="food_pairingTrois"
                    required
                  ></v-text-field>
                </v-col>               
              </v-row>

              <v-row>
                <!-- Field  contributed_by-->
                <v-col cols="12" md="6">
                  <v-text-field
                    variant="outlined"
                    v-model="contributed_by"
                    label="Contributed by"
                    required
                  ></v-text-field>
                </v-col>

               <!--Fiels image_url  -->
                <v-col cols="12" md="6">
                  <v-text-field
                    variant="outlined"
                    v-model="image_url"        
                    label="img url"
                    required
                  ></v-text-field>
                </v-col>               
              </v-row>

              <v-row>
                <!-- Fiels description -->
                <v-col cols="12" md="6">
                  <v-textarea 
                    variant="outlined"
                    v-model="description"        
                    label="Description"
                    required
                  ></v-textarea >
                </v-col>

                <!--Field brewers_tips  -->
                <v-col cols="12" md="6">
                  <v-textarea
                    variant="outlined"
                    v-model="brewers_tips"
                    label="Brewers tips"
                    required
                  ></v-textarea >
                </v-col>
              </v-row>

            </v-container>
          </v-form>
        </v-card-text>
        
        <v-card-actions>
          <v-btn color="dark" block @click="dialog = false, createBeerMethode()">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    


  </v-layout>


</template>

<script>
// import AxiosBeers from "../services/axios"
import { mapStores } from "pinia";
import {beersStore} from '../store/store.js'
import { useDate } from 'vuetify/labs/date'

export default {
  data: () => {
    return {
      date: useDate(),
      show: false,
      dialog: false,
      name:'',
      tagline:'',
      first_brewed:'',
      food_pairing:'',
      food_pairingDeux:'',
      food_pairingTrois:'',
      contributed_by:'',
      image_url:'',
      description:'',
      brewers_tips:'',

      fieldRulesGeneral: [
        value => {
          if(value) return true
            return 'This field is required'
          },
       
      ]
      
    }
  },
  computed: {
    // note we are not passing an array, just one store after the other
    // each store will be accessible as its id + 'Store'
    ...mapStores(beersStore)},
  methods: {
    
   async createBeerMethode(){
    console.log('[Component][FormAddBeer][createBeerMethode] Create beers')
    await this.beersStore.createBeers(this.name, this.tagline, this.first_brewed, this.contributed_by, this.food_pairing, this.food_pairingDeux, this.food_pairingTrois, this.image_url, this.description, this.brewers_tips, ) 
    
  }
  }
};
</script>
