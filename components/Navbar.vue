<template>
  <v-app-bar fixed app class="primary">
    <v-toolbar-title v-text="title" />
    <v-spacer />
    <v-toolbar-items>
      <v-btn :to="{ name: 'list-one' }" exact text class="">
        <v-icon left>mdi-menu</v-icon>
        List One
      </v-btn>
      <v-btn :to="{ name: 'list-two' }" exact text class="">
        <v-icon left>mdi-menu</v-icon>
        List Two
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      title: "Branding"
    };
  }
};
</script>

<style></style>
