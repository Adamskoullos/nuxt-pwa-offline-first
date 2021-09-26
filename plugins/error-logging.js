export default ({ app, $axios, store }, inject) => {
  // =============================================================================
  const errorLogger = error => {
    console.log(error.message);
    if (error.request) {
      // Code to run...
      console.log(error.request);
    } else if (error.response) {
      // Code to run...
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.statusText);
      console.log(error.response.headers);
      console.log(error.toJSON);
    } else {
      // Code to run...
      console.log(error.toJSON);
    }
  };
  // =================================================================================

  // =================================================================================
  inject("errorLogger", errorLogger);
};
