export default ({ app, $axios, store }, inject) => {
  // =============================================================================
  const errorLogger = error => {
    console.log(error.message);
    if (error.request) {
      console.log(error.request);
    } else if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.statusText);
      console.log(error.response.headers);
      console.log(error.toJSON);
    } else {
      console.log(error.toJSON);
    }
  };
  // =================================================================================

  // =================================================================================
  inject("errorLogger", errorLogger);
};
