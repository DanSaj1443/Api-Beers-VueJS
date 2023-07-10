<template>
  <v-layout class="mx-auto my-5 rounded-lg justify-center">
    <v-dialog v-model="dialog" max-width="800px">
      <template v-slot:activator="{ props }">
        <v-btn class="ms-11" color="info" flat v-bind="props">Add new beer</v-btn>
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
                    v-model="beer.name"
                    label="Name"
                    :rules="fieldRulesGeneral"
                    required
                  ></v-text-field>
                </v-col>

                <!--Field tagline  -->
                <v-col cols="12" md="4">
                  <v-text-field
                    variant="outlined"
                    v-model="beer.tagline"
                    label="Tagline"
                    required
                    :rules="fieldRulesGeneral"
                  ></v-text-field>
                </v-col>

                 <!--Field Date -->
                 <v-col cols="12" md="4">
                  <v-text-field
                    variant="outlined"
                    v-model="beer.first_brewed"
                    label="MM/YYYY"
                    required
                    :rules="fieldRulesGeneral"
                  ></v-text-field>
                </v-col>               
              </v-row>

              <v-row>
                <!-- Field food_pairing -->
                <v-col cols="12" md="4">
                  <v-text-field
                    variant="outlined"
                    v-model="beer.food_pairing"
                    label="food_pairingTrois"
                    required
                    :rules="fieldRulesGeneral"
                  ></v-text-field>
                </v-col>

                <!--Field food_pairingDeux  -->
                <v-col cols="12" md="4">
                  <v-text-field
                    variant="outlined"
                    v-model="beer.food_pairingDeux"
                    label="food_pairingTrois"
                    required
                    :rules="fieldRulesGeneral"
                  ></v-text-field>
                </v-col>

                 <!--Field food_pairingTrois -->
                 <v-col cols="12" md="4">
                  <v-text-field
                    variant="outlined"
                    v-model="beer.food_pairingTrois"
                    label="food_pairingTrois"
                    required
                    :rules="fieldRulesGeneral"
                  ></v-text-field>
                </v-col>               
              </v-row>

              <v-row>
                <!-- Field  contributed_by-->
                <v-col cols="12" md="6">
                  <v-text-field
                    variant="outlined"
                    v-model="beer.contributed_by"
                    label="Contributed by"
                    required
                    :rules="fieldRulesGeneral"
                  ></v-text-field>
                </v-col>

               <!--Fiels image_url  -->
                <v-col cols="12" md="6">
                  <v-text-field
                    variant="outlined"
                    v-model="beer.image_url"        
                    label="img url"
                    required
                    :rules="fieldRulesGeneral"
                  ></v-text-field>
                </v-col>               
              </v-row>

              <v-row>
                <!-- Fiels description -->
                <v-col cols="12" md="6">
                  <v-textarea 
                    variant="outlined"
                    v-model="beer.description"        
                    label="Description"
                    required
                    :rules="fieldRulesGeneral"
                  ></v-textarea >
                </v-col>

                <!--Field brewers_tips  -->
                <v-col cols="12" md="6">
                  <v-textarea
                    variant="outlined"
                    v-model="beer.brewers_tips"
                    label="Brewers tips"
                    required
                    :rules="fieldRulesGeneral"
                  ></v-textarea >
                </v-col>
              </v-row>
            </v-container>
          </v-form>
          <v-alert
            v-if="message"
            type="success"
            title="Bravo"
            text="Youur beer was added successfully"
          ></v-alert> 
          <v-alert
            v-if="wrongMessage"
            type="error"
            title="Opps"
            text="something went wrong"
          ></v-alert> 

        </v-card-text>
        
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn 
            class="me-15 mb-12 px-4"
            color="success" 
            variant="tonal"
            @click="dialog=true, createBeerMethode()">
            Add beer
          </v-btn>
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
  components: {
   
  },
  data: () => {
    return {
      wrongMessage: false,
      message: false,
      date: useDate(),
      show: false,
      dialog: false,
      beer: 
      {name:'',
      tagline:'',
      first_brewed:'',
      food_pairing:'',
      food_pairingDeux:'',
      food_pairingTrois:'',
      contributed_by:'',
      image_url:'',
      description:'',
      brewers_tips:''},
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
    
   async createBeerMethode(e){
    console.log('[Component][FormAddBeer][createBeerMethode] Create beers')
    await this.beersStore.createBeers(this.beer) 
    if(this.beersStore.getResponseAddBeer.status === 200) {
      this.message = true
      setTimeout(()=>{this.dialog = false;}, 1000)    
    } else {
        this.wrongMessage = true
        setTimeout(()=>{this.wrongMessage = false;}, 1000)    
      }
   }
  }
};
</script>
