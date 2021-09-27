<template>
  <v-row class="fill-height">
    <v-col class="d-flex flex-column justify-center align-center">
      <v-btn :to="{ name: 'list-one' }" class="mb-15">Back</v-btn>
      <h1 class="display-1">
        <span class="white--text">Task: </span>{{ todo.text }}
      </h1>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    todo() {
      let array = this.$store.state.listOne.todos;
      return array.find(todo => todo.id == this.$route.params.id);
    }
  }
};
</script>

<style></style>
