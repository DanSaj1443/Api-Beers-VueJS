<template>
  <v-layout  
    class="my-5 py-5">
    <v-card 
      :id="id"
      class="mx-auto my-5 rounded-lg text-center" 
      max-width="344" 
      elevation="10">
        <v-img 
        class="py-5" 
        :src="srcImage" 
        max-height="300" 
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

      <v-card-title> {{ titleBeer, id }} </v-card-title>

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
        <v-item-group>
          <v-btn icon="mdi mdi-delete" size="x-large" @click="select($event)"></v-btn>
        </v-item-group>
      </v-card-actions>

    </v-card>
  </v-layout>
</template>

<script>
import "@mdi/font/css/materialdesignicons.css";
import AxiosBeers from "../services/axios";
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
  methods: {

  async select(event) {            
      console.log('id', event.target.parentElement.parentElement.parentElement.parentElement.id); 
    await AxiosBeers.deleteBeer(this.id);
    location.reload();
    }
  }
};
</script>
