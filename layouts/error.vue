<template>
  <v-row>
    <v-col class="d-flex flex-column align-center">
      <h1 class="error-page text-center font-weight-regular">404</h1>
      <h2 class="error-page text-center font-weight-regular mb-9">
        Page not found
      </h2>
      <v-btn :to="{ name: 'listOne' }">Take me home</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: "empty"
};
</script>

<style>
h1.error-page {
  font-size: 5rem;
}
h2.error-page {
  font-size: 3rem;
}
</style>
