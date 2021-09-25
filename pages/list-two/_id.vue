<template>
  <v-row class="fill-height">
    <v-col class="d-flex flex-column justify-center align-center">
      <h1 class="display-1 mb-5">List Two</h1>
      <h1 class="white--text display-1">{{ todo.text }}</h1>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    todo() {
      let array = this.$store.state.listTwo.todos;
      return array.find(todo => todo.id == this.$route.params.id);
    }
  }
};
</script>

<style></style>
