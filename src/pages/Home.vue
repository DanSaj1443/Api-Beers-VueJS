<template>
  <v-container class="pa-0" fluid>
    <v-parallax :src="botright_vite">
      <div class="text-h4 my-16 py-16 d-flex justify-center">
        <h1>Welcome to Beer API</h1>
      </div>
      <div class="d-flex justify-center ma-auto w-50 rounded-xl bg-orange-darken-1 daniel-opacity">
        <h2 class="font-weight-medium text-center text-black text-h4 font-italic py-12 px-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
          nesciunt aliquam nostrum, voluptate repellendus unde amet itaque
          voluptas delectus veritatis cum dicta hic quae! Quis perferendis iste
          reprehenderit ex iusto iure excepturi sed fuga, velit ducimus itaque
          aut esse libero, quidem similique vitae nostrum pariatur hic assumenda
          molestias quia necessitatibus!
        </h2>
      </div>
    </v-parallax>
  </v-container>
</template>
<script>
export default {
  data: () => {
    return {
      botright_vite: new URL(
        "../assets/jon-parry-C8eSYwQkwHw-unsplash.jpg",
        import.meta.url
      ).href,
      overlay: true,
    };
  },
  props: {},
};
</script>
<style>
.daniel-opacity {
  opacity: 0.6;
}
</style>
