<template>
  <v-app light>
    <Navbar />>
    <v-main>
      <v-container id="main-container" fill-height class="">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
.theme--light.v-application {
  background: linear-gradient(
    303.46deg,
    #aeadf6 59.26%,
    #d3d4ff 100.01%
  ) !important;
}

#main-container {
  overflow: auto;
}
</style>
