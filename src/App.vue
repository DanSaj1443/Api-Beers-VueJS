<template>
  <v-app>
   <v-toolbar app>
      <header-component />
    </v-toolbar>

      <v-main class="pt-0">
        <suspense>
        <router-view></router-view>
      </suspense>
      </v-main>
      

    <v-footer class="pa-0">
      <footer-component />
    </v-footer>
  </v-app>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";

import FooterComponent from "./components/FooterComponent.vue";

export default {
  components: {HeaderComponent, FooterComponent },
};
</script>


