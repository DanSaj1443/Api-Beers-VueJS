<template>
  <v-container>
    <v-row 
      class="text-center py-14">
      <v-col>
        <v-icon 
          size="x-large" 
          class="mdi mdi-instagram py-15">
        </v-icon>
      </v-col>

      <v-col>
        <v-icon 
          size="x-large" 
          class="mdi mdi-facebook py-15">
        </v-icon>
      </v-col>

      <v-col>
        <v-icon 
          size="x-large" 
          class="mdi mdi-home py-15">
        </v-icon>
      </v-col>

    </v-row>
    <v-row>
      <v-col>
        <p class="font-weight-light text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sed
          eaque autem reiciendis rerum minus? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Praesentium aliquid nam ab quibusdam
          impedit. Expedita!
        </p>
      </v-col>
    </v-row>

    <v-row 
      class="py-15">
        <form-contact />      
    </v-row>
  </v-container>
</template>
<script>
import "@mdi/font/css/materialdesignicons.css";
import FormContact from "../components/FormContact.vue";

export default {
    components: { FormContact },
};
</script>

