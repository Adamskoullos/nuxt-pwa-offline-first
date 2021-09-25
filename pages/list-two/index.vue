<template>
  <v-container class="main-container justify-center align-start">
    <h1 class="text-center display-1">List Two</h1>
    <AddTask :module="'listTwo'" />
    <FilterTabs :module="'listTwo'" :filter="filter" />
    <TaskList
      :module="'listTwo'"
      :isLoading="isLoading"
      :error="error"
      :todos="todos"
      :filteredTodos="filteredTodos"
      :route="'list-two'"
    />
  </v-container>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("listTwo/fetchTodo");
  },
  computed: {
    filter() {
      return this.$store.state.listTwo.filter;
    },
    filteredTodos() {
      return this.$store.getters["listTwo/filterTodos"];
    },
    isLoading() {
      return this.$store.state.listTwo.isLoading;
    },
    error() {
      return this.$store.state.listTwo.error;
    },
    todos() {
      return this.$store.state.listTwo.todos;
    }
  }
};
</script>

<style></style>
