<template>
  <v-app light>
    <Navbar />>
    <v-main>
      <Nuxt />
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

/* Custom classes to be used globally, should be in custom scss file  */
.main-container {
  overflow: auto;
}

.max-width {
  width: 90%;
  max-width: 900px;
}

span.material-icons-outlined {
  font-family: "Material Icons Outlined" !important;
}

span.material-icons {
  font-family: "Material Icons" !important;
}

h1.title.text-center {
  color: rgba(58, 58, 58, 0.753);
  font-size: 2.5rem !important;
  font-weight: 300;
  margin: 20px auto;
}
</style>
