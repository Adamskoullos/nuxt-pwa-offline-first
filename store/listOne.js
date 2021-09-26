import axios from "axios";

export const state = () => ({
  todos: [],
  isLoading: false,
  error: "",
  filter: "all"
});
//   Mutations >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const mutations = {
  setTodosData(state, data) {
    state.todos = data;
  },
  setIsLoading(state, boolean) {
    state.isLoading = boolean;
  },
  setError(state, err) {
    state.error = err;
  },
  setUpdateTodo(state, boolean) {
    state.updateTask = boolean;
  },
  setFilter(state, input) {
    state.filter = input;
  }
};

//   Actions >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export const actions = {
  async fetchTodo(ctx) {
    ctx.commit("setIsLoading", true);
    ctx.commit("setError", "");
    try {
      const endpoint = "one";
      const todos = await this.$getAllTodos(endpoint);
      ctx.commit("setTodosData", todos);
      ctx.commit("setIsLoading", false);
    } catch (error) {
      this.$errorLogger(error);
      ctx.commit("setError", "Sorry, unable to fetch todo list at this time");
      ctx.commit("setIsLoading", false);
    }
  },
  // ====================================================================================

  async addTodo(ctx, newTodo) {
    try {
      const todos = ctx.state.todos;
      const endpoint = "one";
      const newArr = await this.$postNewTodo(todos, newTodo, endpoint);
      ctx.commit("setTodosData", newArr);
    } catch (error) {
      this.$errorLogger(error);
      ctx.commit("setError", "Unable to access the data base at this time");
    }
  },

  // =======================================================================================

  async deleteTodo(ctx, todo) {
    try {
      const todos = ctx.state.todos;
      const endpoint = "one";
      const newArr = await this.$removeTodo(todos, todo, endpoint);
      ctx.commit("setTodosData", newArr);
    } catch (error) {
      this.$errorLogger(error);
    }
  },

  // ======================================================================================

  updateTodo(ctx, newArr) {
    ctx.commit("setTodosData", newArr);
  },

  // =======================================================================================

  async toggleComplete(ctx, todo) {
    try {
      const todos = ctx.state.todos;
      const endpoint = "one";
      const newArr = await this.$toggleTick(todos, todo, endpoint);
      ctx.commit("setTodosData", newArr);
    } catch (error) {
      this.$errorLogger(error);
      ctx.commit("setError", "Unable to access the data base at this time");
    }
  },

  // =======================================================================================

  async updateTodoText(ctx, data) {
    try {
      const todos = ctx.state.todos;
      const endpoint = "one";
      const newArr = await this.$patchUpdatedTask(todos, data, endpoint);
      ctx.commit("setTodosData", newArr);
    } catch (error) {
      this.$errorLogger(error);
    }
  },

  // =======================================================================================

  filterTodoList(ctx, input) {
    ctx.commit("setFilter", input);
  }
};

// Getters >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export const getters = {
  filterTodos(state) {
    if (state.filter == "all") {
      return state.todos;
    }
    if (state.filter == "complete") {
      return state.todos.filter(todo => todo.complete);
    }
    if (state.filter == "incomplete") {
      return state.todos.filter(todo => todo.complete == false);
    }
  }
};
