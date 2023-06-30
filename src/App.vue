<template>
  <v-app>
   <v-toolbar app>
      <header-component />
    </v-toolbar>

      <v-main class="pt-0">
        <router-view></router-view>
      </v-main>
      

    <v-footer class="pa-0">
      <footer-component />
    </v-footer>
  </v-app>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import Home from "./pages/Home.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  components: { Home, HeaderComponent, FooterComponent },
};
</script>


