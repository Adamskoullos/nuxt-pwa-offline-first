export default ({ $axios }, inject) => {
  // =============================================================================
  const postNewTodo = async (todos, newTodo, endpoint) => {
    const res = await $axios.post(
      `https://dev-test-api-${endpoint}.herokuapp.com/todos`,
      newTodo
    );
    const newArr = [...todos, res.data];
    return newArr;
  };
  // =================================================================================

  const removeTodo = async (todos, todo, endpoint) => {
    await $axios.delete(
      `https://dev-test-api-${endpoint}.herokuapp.com/todos/` + todo.id
    );

    const newArr = [...todos].filter(task => task.id != todo.id);

    return newArr;
  };

  // =================================================================================

  const patchUpdatedTask = async (todos, data, endpoint) => {
    const res = await $axios.patch(
      `https://dev-test-api-${endpoint}.herokuapp.com/todos/` + data.todo.id,
      {
        update: !data.todo.update,
        text: data.text,
        complete: false
      }
    );
    const updatedTodo = res.data;
    const newArr = [...todos].map(task => {
      if (updatedTodo.id == task.id) {
        return updatedTodo;
      }
      return task;
    });
    return newArr;
  };

  // ===================================================================================

  const toggleTick = async (todos, todo, endpoint) => {
    const res = await $axios.patch(
      `https://dev-test-api-${endpoint}.herokuapp.com/todos/` + todo.id,
      {
        complete: !todo.complete
      }
    );
    const updatedTodo = res.data;
    const newArr = [...todos].map(task => {
      if (updatedTodo.id == task.id) {
        return updatedTodo;
      }
      return task;
    });
    return newArr;
  };

  // ===================================================================================

  inject("postNewTodo", postNewTodo);
  inject("removeTodo", removeTodo);
  inject("patchUpdatedTask", patchUpdatedTask);
  inject("toggleTick", toggleTick);
};
