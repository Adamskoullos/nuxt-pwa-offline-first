<template>
  <v-container class="main-container justify-center align-start">
    <h1 class="text-center display-1">List One</h1>
    <AddTask :module="'listOne'" />
    <FilterTabs :module="'listOne'" :filter="filter" />
    <TaskList
      :module="'listOne'"
      :isLoading="isLoading"
      :error="error"
      :todos="todos"
      :filteredTodos="filteredTodos"
      :route="'list-one'"
    />
  </v-container>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("listOne/fetchTodo");
  },
  computed: {
    filter() {
      return this.$store.state.listOne.filter;
    },
    filteredTodos() {
      return this.$store.getters["listOne/filterTodos"];
    },
    isLoading() {
      return this.$store.state.listOne.isLoading;
    },
    error() {
      return this.$store.state.listOne.error;
    },
    todos() {
      return this.$store.state.listOne.todos;
    }
  }
};
</script>

<style></style>
