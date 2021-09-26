export default ({ $axios }, inject) => {
  // =============================================================================
  const getAllTodos = async endpoint => {
    const res = await $axios(
      `https://dev-test-api-${endpoint}.herokuapp.com/todos`
    );
    const newArr = [...res.data];
    return newArr;
  };
  // =================================================================================

  inject("getAllTodos", getAllTodos);
};
