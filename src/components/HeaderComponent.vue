<template>
  <v-app-bar 
    color="orange-lighten-1">
    <template 
        v-slot:prepend>
          <v-menu 
            transition="fab-transition">

            <template 
            v-slot:activator="{ props }">
              <v-btn 
              v-bind="props" 
              variant="plain">
                <v-app-bar-nav-icon> </v-app-bar-nav-icon>
              </v-btn>
            </template>

            <v-list class="bg-yellow-lighten-1">
              <v-list-item 
                v-for="page in pagesList" 
                :key="page.title">
                  <router-link
                    @click="pageTitle = page.title"
                    class="text-decoration-none text-black"
                    :to="`${page.to}`"
                    >{{ page.title }}
                  </router-link>
              </v-list-item>          
            </v-list>

          </v-menu>

    </template>
      <v-app-bar-title 
        class="text-h4 font-weight-bold d-flex justify-center">
        {{ $route.name }}
      </v-app-bar-title> 
  </v-app-bar>

</template>

<script>
export default {
  data: () => {
    return {
      pageTitle:'Home',
      pagesList: [
        { title: "Home", to: "/" },
        { title: "Beers List", to: "/beers" },
        { title: "Contact", to: "/contact" },
      ],
    };
  }, 
};
</script>

