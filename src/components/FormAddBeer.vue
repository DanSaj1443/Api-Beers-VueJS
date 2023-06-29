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
                    v-model="beer_name"
                    label="Name"
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
                    label="First brewed"
                    required
                  ></v-text-field>
                </v-col>               
              </v-row>

              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    variant="outlined"
                    v-model="contributed"
                    label="Contributed by"
                    required
                  ></v-text-field>
                </v-col>
               
                <v-col cols="12" md="6">
                  <v-text-field
                    variant="outlined"
                    v-model="img_url"        
                    label="img url"
                    required
                  ></v-text-field>
                </v-col>
               
              </v-row>
              <v-row>
                <v-col cols="12" md="6">
                  <v-textarea 
                    variant="outlined"
                    v-model="description_beer"        
                    label="Description"
                    required
                  ></v-textarea >
                </v-col>
                <v-col cols="12" md="6">
                  <v-textarea
                    variant="outlined"
                    v-model="tips"
                    label="Brewers tips"
                    required
                  ></v-textarea >
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="dark" block @click="dialog = false, postBeer()">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import AxiosBeers from "../services/axios"

export default {
  data: () => {
    return {
     
      show: false,
      dialog: false,
      beer_name:'',
      tagline:'',
      first_brewed:'',
      contributed:'',
      img_url:'',
      description_beer:'',
      tips:'',
      beer_to_post:{}
    }
  },
  methods: {
   async createBeerMethode(){
      this.beer_to_post = {
        name: this.beer_name,
        tagline: this.tagline,
        first_brewed: this.first_brewed,
        contributed: this.contributed,
        img_url: this.img_url,
        description: this.description_beer,
        tips: this.tips,
      }
      console.log(this.beer_to_post)
    },
    async funct(){
      let createB = await AxiosBeers.createBeers()
    }
  },
};
</script>
